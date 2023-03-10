# Проверка пути

[Назад к списку компонентов](../README.md)

## Назначение

Компонент проверяет существует ли абсолютный или относительный путь. 

## Входные порты

| Название| Тип|
|:----------|:-----------|
| Параметры | Переменные    |

## Переменные в порте "Параметры"

| № | Метка               | Тип                                    | Значение |
|:--|:--------------------|:---------------------------------------|:---------|
| 1 | Путь | ![](./img/boolean_default.svg) Логический | `null` |

1. Путь — абсолютный или относительный путь для проверки.

## Выходные порты

| Название| Тип|
|:----------|:-----------|
| Результаты операции | Переменные |

### Переменные в порте "Результаты операции"

| № | Метка               | Тип                                    | Описание  |
|:--|:--------------------|:---------------------------------------|:----------|
| 1 | Результат | ![](./img/string_default.svg) Строковый | Выводит **true** если путь существует, либо ошибку операции |
| 2 | Путь | ![](./img/string_default.svg) Строковый |Абсолютный или относительный проверяемый путь|

Переменная **Путь** дублируется в выходной порт для возможного дальнейшего использования. 