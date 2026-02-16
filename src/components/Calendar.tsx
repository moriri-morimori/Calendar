import React from "react";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ===== Zodスキーマ =====
const memoSchema = z.object({
  memo: z.string().min(1, "1文字以上入力してください"),
});
type MemoForm = z.infer<typeof memoSchema>;

export const Calendars = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // 日付ごとのメモ保存用ストア
  const [memos, setMemos] = React.useState<Record<string, string>>({});

  const dateKey = date
    ? date.toLocaleDateString("sv-SE") // "YYYY-MM-DD"
    : "";

  const form = useForm<MemoForm>({
    resolver: zodResolver(memoSchema),
    defaultValues: {
      memo: "",
    },
  });

  // ★ ESLint対応版：依存関係を正しく指定
  React.useEffect(() => {
    const savedMemo = memos[dateKey] || "";

    form.reset({
      memo: savedMemo,
    });
  }, [dateKey, form, memos]);

  const onSubmit = (data: MemoForm) => {
    setMemos((prev) => ({
      ...prev,
      [dateKey]: data.memo,
    }));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />

      <p className="mt-4 font-bold">
        選択日: {date?.toLocaleDateString()}
      </p>

      {date && (
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-2">
          <Input
            placeholder="予定を入力"
            {...form.register("memo")}
          />

          {form.formState.errors.memo && (
            <p className="text-sm text-red-500">
              {form.formState.errors.memo.message}
            </p>
          )}

          <Button type="submit">保存</Button>

          {memos[dateKey] && (
            <p className="mt-2 text-sm text-gray-600">
              保存済みメモ: {memos[dateKey]}
            </p>
          )}
        </form>
      )}
    </div>
  );
};