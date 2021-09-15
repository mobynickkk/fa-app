export class TeacherRepositoryMock {
    getTeachersInfoByGroup(group) {
        return [
            {
                name: "Каверина Валерия Константиновна",
                subject: "Дискретная математика",
                email: "vkkaverina@fa.ru"
            },
            {
                name: "Волкова Елена Сергеевна",
                subject: "Математический анализ. Лекции",
                email: "esvolkova@inbox.ru"
            },
            {
                name: "Петрова Мария Владимировеа",
                subject: "Математический анализ. Семинары",
                email: "mvpetrova@fa.ru"
            },
            {
                name: "Романова Екатерина Владимировна",
                subject: "Алгебра и Геометрия. Семинары",
                email: "ekatromanova@mail.ru"
            },
        ]
    }
}