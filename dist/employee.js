"use strict";
class Employe {
    getSalary = async (salary) => {
        const result = await Promise.resolve(salary);
        return result;
    };
}
