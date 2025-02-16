//Khai bao Array
let dshs = ['Lam','Ngoc','Bach','Danh','Phuong','Vanh']
//truy vấn dữ liệu
console.log(dshs[1])
for(let i =0; i<dshs.length ;i++)
{
    console.log(dshs[i])
}
//thêm phần tử vào cuối mảng
dshs.push('Duy')
console.log(dshs[6])

let numbers = [0,1,5,3,4]
//thay the phan tu
numbers.splice(2,1,2) //2:vị trí thay thế ,1:Thay 1 p.tu ,2:thay 2
console.log(numbers)
//xoa phan tu
dshs.splice(0,2)
console.log(dshs)

/////////////////Khai bao doi tuong
let Vanh ={
    name: 'Vanh',
    age: 14,
    job:'Student'
}
console.log(Vanh.name)
console.log(Vanh['age'])
for ( let key in Vanh){
    console.log (key)
 }
Vanh.sex = 'nam',
Vanh['sex'] = 'nam' 
if ('name' in Vanh)        
{
    console.log('co key name')
}  
delete Vanh.age                                                                                                           
console.log(Vanh)