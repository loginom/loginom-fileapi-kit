# Переименовать файл или папку

[Назад к списку компонентов](../README.md)

## Назначение

Компонент переименовывает объекты файловой системы, т.е. файл или папку.

## Входные порты

| Название| Тип|
|:----------|:-----------|
| Параметры | Переменные    |

## Переменные в порте "Параметры"

| № | Метка               | Тип                                    | Значение |
|:--|:--------------------|:---------------------------------------|:----------|
| 1 | Путь до файла или папки | ![](./img/string_default.svg) Строковый | `null` |
| 2 | Новое имя | ![](./img/string_default.svg) Строковый| `null` |

1. Путь до файла или папки  — полный путь (может быть относительным) к объекту, который требуется переименовать.
2. Новое имя — новое имя объекта.

## Выходные порты

| Название| Тип|
|:----------|:-----------|
| Результаты операции | Переменные |

### Переменные в порте "Результаты операции"

| № | Метка               | Тип                                    | Описание  |
|:--|:--------------------|:---------------------------------------|:----------|
| 1 | Результат | ![](./img/string_default.svg) Строковый | Выводит **true** при положительном результате, либо ошибку операции |
| 2 | Путь до файла или папки | ![](./img/string_default.svg) Строковый | Полный путь (может быть относительным) до объекта, который требуется переименовать|
| 3 | Новое имя | ![](./img/string_default.svg) Строковый| Новое имя файла |

Переменные **Путь до файла или папки** и **Новое имя** дублируются в выходной порт для возможного дальнейшего использования.