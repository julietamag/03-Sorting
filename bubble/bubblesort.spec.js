describe("Bubble Sort", function () {
  let arrDesordenado, arrOrdenado;
  

  beforeEach(function () {
    arrDesordenado = [2, 5, 8, 1, 4, 7, 3, 6, 9];
    arrOrdenado = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  it("bubbleSort es una funcion", function () {
    expect(typeof bubbleSort).toBe("function");
  });
  it("swap es una funcion", function () {
    expect(typeof swap).toBe("function");
  });
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Un Arreglo desordenado que termine ordenado.", function () {
    expect(bubbleSort(arrDesordenado)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
    expect(bubbleSort(arrOrdenado)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("comer todo el chocolate debería llevar exactamente 3 masticadas", function () {
    spyOn(window, "swap").and.callThrough();
    window.bubbleSort(arrDesordenado);
    expect(window.swap.calls.count()).toEqual(12);
  });
});
