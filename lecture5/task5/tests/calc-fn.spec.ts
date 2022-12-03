import { calc } from "../calc-fn";

describe("Проверка функции calc:", () => {
	test("Вызываем функцию, которая вычлиняет арифметику и считает ее.", () => {
		expect(calc("Какой-то текст (10 + 15 - 24) ** 2 + (1 + 15)")).toBe(
			"Какой-то текст 17"
		);
		expect(calc("Какой-то текст (10 + 15 - 24) ** 2")).toBe("Какой-то текст 1");
		expect(calc("Еще какой то текст 2 * 10")).toBe("Еще какой то текст 20");
		expect(calc("Еще какой-то невероятный текст 4 * 2 / 2 * 7 * 3")).toBe(
			"Еще какой-то невероятный текст 84"
		);
		expect(calc("Еще какое-то деление 10 / 5")).toBe("Еще какое-то деление 2");
		expect(calc("Еще какой-то текст (1 + 1 + 10 / 2 + 12 * 2) * 2")).toBe(
			"Еще какой-то текст 62"
		);
		expect(calc("Еще арифметика 2 * 2 * 2 / 2 + 1 + 2")).toBe("Еще арифметика 7");
		expect(
			calc("Более сложная строка с вложенностью (10 + 10 + (10 - 1) * 2 + 1) + 5 - 15")
		).toBe("Более сложная строка с вложенностью 29");
	});
});