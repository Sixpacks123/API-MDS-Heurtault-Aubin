"use strict";
/**
 *
 *
 */
class Employe {
    getSalary = async (salary) => {
        const result = await Promise.resolve(salary);
        return result;
    };
    // correction 
    getSalary(idEmplyee) {
        let promise = new Promise((resolve, reject) => {
            if (idEmplyee > 100) {
                resolve('1000');
            }
            else {
                reject('error');
            }
        });
    }
    salary;
}
