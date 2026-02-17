import * as React from "react"
import { ja } from "date-fns/locale"
import { Calendar } from "@/shared/ui/calendar"

export function Component() {
  // 選択日
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date()
  )

  // 入力値
  const [type, setType] = React.useState<"income" | "expense">("expense")
  const [amount, setAmount] = React.useState("")

  // 保存データ
  const [records, setRecords] = React.useState<
    { date: string; type: "income" | "expense"; amount: number }[]
  >([])

  const handleSubmit = () => {
    if (!selectedDate || !amount) return

    const newRecord = {
      date: selectedDate.toDateString(),
      type,
      amount: Number(amount),
    }

    setRecords((prev) => [...prev, newRecord])
    setAmount("")
  }

  // 選択日のデータだけ抽出
  const filteredRecords = records.filter(
    (r) => r.date === selectedDate?.toDateString()
  )

  const total = filteredRecords.reduce((sum, r) => {
    return r.type === "income"
      ? sum + r.amount
      : sum - r.amount
  }, 0)

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* 左：カレンダー */}
      <div className="w-1/2 h-full border-r p-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          locale={ja}
          className="w-full h-full"
        />
      </div>

      {/* 右：入力＆一覧 */}
      <div className="w-1/2 p-6 space-y-6 overflow-y-auto">
        <h2 className="text-xl font-bold">
          {selectedDate?.toLocaleDateString()} の収支
        </h2>

        {/* 種類 */}
        <div className="space-y-2">
          <label htmlFor="type" className="text-sm font-medium">
            種類
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) =>
              setType(e.target.value as "income" | "expense")
            }
            className="border p-2 rounded w-full"
          >
            <option value="expense">支出</option>
            <option value="income">収入</option>
          </select>
        </div>

        {/* 金額 */}
        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm font-medium">
            金額
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* 保存ボタン */}
        <button
          onClick={handleSubmit}
          className="bg-primary text-white px-4 py-2 rounded w-full"
        >
          保存
        </button>

        {/* 一覧 */}
        <div className="space-y-2">
          <h3 className="font-semibold">一覧</h3>
          {filteredRecords.length === 0 && (
            <p className="text-sm text-muted-foreground">
              データがありません
            </p>
          )}

          {filteredRecords.map((record, index) => (
            <div
              key={index}
              className="flex justify-between border p-2 rounded"
            >
              <span>
                {record.type === "income" ? "収入" : "支出"}
              </span>
              <span
                className={
                  record.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                ¥{record.amount}
              </span>
            </div>
          ))}
        </div>

        {/* 合計 */}
        <div className="pt-4 border-t font-bold text-lg">
          合計: ¥{total}
        </div>
      </div>
    </div>
  )
}