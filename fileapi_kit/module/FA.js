import * as fs from "builtIn/FS"; 
import { InputTable, InputTables, InputVariables, OutputTable, DataType, DataKind, UsageType } from "builtIn/Data";

function check_paths(FromPath, ToPath) {
	if (fs.existsSync(FromPath) == false | FromPath == ""){
    	return ("Некорректный путь \"Что копировать\"");
	}
    return (true);
}

function check_errors(Path, NewName){
	if (fs.existsSync(Path) == false | Path == ""){
		return ("Некорректный путь")
	}
    if (NewName == ""){
    	return ("Имя объекта не должно быть пустым");
    }
    return true;
}

function check_folders(FromPath, ToPath) {
	if (!fs.statSync(FromPath).isDirectory()){
    	return "\"Путь до папки\" не является папкой";
    }
    if (!fs.statSync(ToPath).isDirectory()){
    	return "\"Куда копировать\" не является папкой";
    }
    return true;
}

function copyFolder(from, to) {
    let index = from.lastIndexOf("\\");
    fs.mkdirSync(to, { recursive: true });
    for (const object of fs.readdirSync(from, { withFileTypes: true })) {
        let from_с = from + "\\" + object.name;
        let to_с = to + "\\" + object.name;
        if (object.isFile()) {
            fs.copyFileSync(from_с, to_с);
        } 
        else if (object.isDirectory()) {
            fs.mkdirSync(to_с, { recursive: true });
            copyFolder(from_с, to_с);
        }
    }
}

function renameFolder(from, to) {
    let index = from.lastIndexOf("\\");
    fs.mkdirSync(to, { recursive: true });
    for (const object of fs.readdirSync(from, { withFileTypes: true })) {
        let from_с = from + "\\" + object.name;
        let to_с = to + "\\" + object.name;
        if (object.isFile()) {
            fs.renameSync(from_с, to_с);
        } 
        else if (object.isDirectory()) {
            fs.mkdirSync(to_с, { recursive: true });
            renameFolder(from_с, to_с);
        }
    }
    fs.rmSync(from, { recursive: true });
}

function check_list(list_of_files, to_path){
    for (let i = 0; i < list_of_files.RowCount; i++){
        if (fs.existsSync(list_of_files.Get(i)) == false || list_of_files.Get(i) == ""){
            return ("Некорректный путь \"Что копировать(переместить)\"");
        }
    }
    
	if (to_path == ""){
    	return("Некорректный путь \"Куда копировать(переместить)\" ");
    }
    return (true);
}

function getFileName(path) {
    let fileName;

    // Проверяем, содержит ли строка слеш или обратный слеш
    if (path.includes('/') || path.includes('\\')) {
        // Разделяем путь на части по слешу или обратному слешу
        let parts = path.split(/[/\\]/);
        // Получаем имя файла
        fileName = parts[parts.length - 1];
    } else {
        // Если разделители отсутствуют, вся строка является именем файла
        fileName = path;
    }

    // Разделяем имя файла на имя и расширение
    let fileNameParts = fileName.split('.');
    // Если в имени файла есть точка и это не скрытый файл в Unix-подобных системах
    if (fileNameParts.length > 1 && !(fileNameParts.length === 2 && fileNameParts[0] === '')) {
        // Удаляем последний элемент массива (расширение файла)
        fileNameParts.pop();
        // Объединяем оставшиеся части обратно в строку
        fileName = fileNameParts.join('.');
    }

    return fileName;
}

export { check_paths, check_errors, copyFolder, check_folders, renameFolder, check_list, getFileName };