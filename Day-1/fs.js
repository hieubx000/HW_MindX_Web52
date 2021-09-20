const fs = require('fs');

const path = require('path');


// fs.writeFile(
//     'student.json',
//     JSON.stringify(""),
//     function(err) {
//         if (err) return console.log(err)
//         console.log("file student.json đã được tạo!");
//     }
// )

const addNewPromise = async student => {
    try {
        const isExit = await fs.existsSync('student.json');
        if (!isExit) {
            const newList = [student];
            const dataToSave = JSON.stringify(newList)
            await fs.promises.writeFile('student.json', dataToSave);
            return 1;
        }
        const data = await fs.promises.readFile('student.json', 'utf8');

        const dataConvert = JSON.parse(data);
        const newList = [...dataConvert, student];

        await fs.promises.writeFile('student.json', JSON.stringify(newList));
        console.log('THêm mới học sinh thành công');

    } catch (err) {
        console.log('THêm mới học sinh thất bại');
        throw err;

    }
}

const updateStudent = async update => {
    try {
        const newList = update;
        const dataToSave = "," + JSON.stringify(newList)
        fs.appendFile('student.json', dataToSave, function(err) {
            if (err) throw err;
            console.log('updated thành công!');
        });

    } catch (err) {
        console.log('update thất bại');
        throw err;

    }
}

const deleteStudent = async() => {
    try {
        fs.unlink('student.json', function(err) {
            if (err) throw err;
            console.log('delete thành công');
        });

    } catch (err) {
        console.log('Xoa that bai');
        throw err;

    }
}

const main = () => {
    const newStudent1 = {
        "id": "001",
        "name": "Hieu",
        "age": "21",
        "department": "physics"
    }
    const newStudent2 = {
            "id": "002",
            "name": "Nguyen",
            "age": "15",
            "department": "Math"
        }
        // addNewPromise(newStudent1)
        // deleteStudent();
    updateStudent(newStudent2)
}

main();