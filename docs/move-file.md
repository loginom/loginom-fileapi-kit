# Переместить файл

[Назад к списку компонентов](../README.md)

## Назначение

Компонент перемещает файл по указанному пути.

## Входные порты

| Название| Тип|
|:----------|:-----------|
| Параметры | Переменные    |

## Переменные в порте "Параметры"

| № | Метка               | Тип                                    | Значение |
|:--|:--------------------|:---------------------------------------|:---------|
| 1 | Что переместить | ![](./img/string_default.svg) Строковый | `null` |
| 2 | Куда переместить | ![](./img/string_default.svg) Строковый| `null` |

1. Что переместить  — полный путь (может быть относительным) к перемещаемому файлу.
2. Куда переместить  — полный путь (может быть относительным) к новому расположению файла.

## Выходные порты

| Название| Тип|
|:----------|:-----------|
| Результаты операции | Переменные |

### Переменные в порте "Результаты операции"

| № | Метка               | Тип                                    | Описание  |
|:--|:--------------------|:---------------------------------------|:----------|
| 1 | Результат | ![](./img/string_default.svg) Строковый | Выводит **true** при положительном результате, либо ошибку операции |
| 2 | Что переместить | ![](./img/string_default.svg) Строковый | Полный путь (может быть относительным) до файла, который требуется переместить |
| 3 | Куда переместить | ![](./img/string_default.svg) Строковый|  Полный путь (может быть относительным) куда переместить файл |

Переменные **Что переместить** и **Куда переместить** дублируются в выходной порт для возможного дальнейшего использования. 