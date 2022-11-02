
/**
 * 
 * 
 */
class Employe {

    const getSalary: GetSalary = async (salary) => {
        const result = await Promise.resolve(salary);
      
        return result;
      };


// correction 
    public getSalary (idEmplyee): Promise<number>{
      let promise = new Promise<number>((resolve, reject) => {

        if(idEmplyee > 100){
          resolve('1000');
        }else{
          reject('error');
        }
      });
    }

 const salary
}