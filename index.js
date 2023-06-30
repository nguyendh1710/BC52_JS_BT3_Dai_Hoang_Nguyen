
// Thêm số và hiển thị mảng

let arrays = []; //mảng cũ phải khai báo ngoài hàm mới push/unshift ăn

function mangmoi(){
//console.log(arrays);
let idday=addNum();

//console.log(arrays);

 arrays.push(idday);



display(arrays);

return arrays;
}
//Hàm thêm số
function addNum(arrays) {
  let idne = +document.getElementById("txtSo").value;
  return idne;

}

// Hàm nhận vào mảng arrays và hiển thị ra giao diện table
function display (arrays) {
  
  // DÙNG HÀM REDUCE NÓ SẼ LẶP ĐỂ LÀM DANH SÁCH
  //let html = arrays.reduce((result, value) => {
   // return (result +`<tr><td>${arrays}</td></tr>`);
  //}, "");
  
  document.getElementById("tbodySo").innerHTML = `<tr><td>${arrays}</td></tr>`;
}
//Bài 1: Tính tổng số dương
function tinhtong(arrays){
    
  let tong=0;
 
  
  for(let i=0; i< arrays.length; i++){
        if(arrays[i]>=0){
          tong+=arrays[i];
        }
  }
 

  return tong;
}

function ex1(){
  ketqua = tinhtong(arrays);
  
  console.log(ketqua);
  document.getElementById("tbodyTong").innerHTML = `<tr><td>${ketqua}</td></tr>`;
  
}
//Bài 2:Đếm số dương
function demsoduong(arrays){
    
  let dem=0;
  let  demduong=dem;
  if(arrays[0]>0){
    demduong =dem+ 1;
    
  }
  
  for(let i=1; i<= arrays.length; i++){
        if(arrays[i]> 0){
          demduong = demduong+1;
          
  }
 

  
}
return demduong;
}
function ex2(){
  ketqua2 = demsoduong(arrays);
  
  console.log(ketqua2);                                     // o day dung bien ketqua luon cung khong sao vi khac bien ketqua o bai 1 do no nam trong ham nen chi anh huong trong ham ex do thoi
  document.getElementById("tbodyDem").innerHTML = `<tr><td>${ketqua2}</td></tr>`;
  
}
//Bài 3:Tìm số nhỏ nhất

function sonhonhat(arrays){
    
  
 
  
  let min_val = arrays.reduce(function(accumulator, element){
    return (accumulator < element) ? accumulator : element
  });
 

  return min_val;
}

function ex3(){
  ketqua3 = sonhonhat(arrays);
  
  console.log(ketqua3);                                     // o day dung bien ketqua luon cung khong sao vi khac bien ketqua o bai 1 do no nam trong ham nen chi anh huong trong ham ex do thoi
  document.getElementById("tbodyTimmin").innerHTML = `<tr><td>${ketqua3}</td></tr>`;
  
}

//Bài 4:Tìm số dương nhỏ nhất

function soduongnhonhat(arrays){
 
 
  //Tím số dương trong mảng arrays và đẩy nó vào mảng khác
  let minmang = [];
  for(let i=0; i<arrays.length; i++){

                   if(arrays[i]>0){
                         minmang.push(arrays[i]);
 
                      } 
  }
  //Tìm số nhỏ nhất trong mảng minmang
  let minInminmang = Math.min.apply(Math, minmang);



  return minInminmang;
}

function ex4(){
  ketqua4 = soduongnhonhat(arrays);
  
  console.log(ketqua4);                                     // o day dung bien ketqua luon cung khong sao vi khac bien ketqua o bai 1 do no nam trong ham nen chi anh huong trong ham ex do thoi
  document.getElementById("tbodyTimminduong").innerHTML = `<tr><td>${ketqua4}</td></tr>`;
  
}


//Bài 5:Tìm số chẵn cuối cùng 
function sochancuoicung(arrays){
    
  
 
  
  let sochancuoicung=arrays[0];
  for(let i=arrays.length - 1; i>= 0; i--){

                   if(arrays[i]% 2 == 0){
                    sochancuoicung=arrays[i];
                      break;
                      } 
                   else{

                    sochancuoicung=-1;


                   }
                    
  }

  return sochancuoicung;
}
function ex5(){
  ketqua5 = sochancuoicung(arrays);
  
  console.log(ketqua5);                                     // o day dung bien ketqua luon cung khong sao vi khac bien ketqua o bai 1 do no nam trong ham nen chi anh huong trong ham ex do thoi
  document.getElementById("tbodyTimchancuoi").innerHTML = `<tr><td>${ketqua5}</td></tr>`;
  
}

//Bài 6:Đổi chỗ 
function doicho(arrays){
    

  let index1 = +document.getElementById("txtSo1").value;
  let index2 = +document.getElementById("txtSo2").value;
  
 
  
  let tam = arrays[index2];
  
  arrays[index2]= arrays[index1];
  
  arrays[index1]=tam;

      return     arrays;          
  }

  

function ex6(){
  ketqua6 =  doicho(arrays);
  
  console.log(ketqua6);                                     // o day dung bien ketqua luon cung khong sao vi khac bien ketqua o bai 1 do no nam trong ham nen chi anh huong trong ham ex do thoi
  document.getElementById("tbodyDoicho").innerHTML = `<tr><td>${ketqua6}</td></tr>`;
  
}
//Bài 7:Sắp xếp tăng dần 
function sapxeptangdan(arrays){
    

  
  
  let mangsudungbai7=[];
  mangsudungbai7 = arrays;
  mangsudungbai7.sort(compare);

      return     mangsudungbai7;          
  }
function compare(a,b){

  return  a-b;
}
  

function ex7(){
  ketqua7 =  sapxeptangdan(arrays);
  
  console.log(ketqua7);                                     // o day dung bien ketqua luon cung khong sao vi khac bien ketqua o bai 1 do no nam trong ham nen chi anh huong trong ham ex do thoi
  document.getElementById("tbodySapxeptangdan").innerHTML = `<tr><td>${ketqua7}</td></tr>`;
  
}

//Bài 8:Tìm số nguyên tố đầu tiên 
function songuyentodautien(arrays){
    
  
 
  
  let songuyentodautien = 0;
  for(let i=0; i<arrays.length; i++){

                   if(isPrime(arrays[i]) === true ){
                    songuyentodautien=arrays[i];
                    break;
                        
                       
                   }
                   else{

                    songuyentodautien=-1;

                   }
                   
                    
  }

  return songuyentodautien;
}

function isPrime(n){

  if(n< 2){
     return false;



  }

   if(n=== 2){
    return true;

     } 
  if(n%2=== 0){
    return false;
  
  } 
  for(let i=3; i<=Math.sqrt(n); i+=2){
          if(n%i === 0){

            return false;
          }


  }


  return true;


}
function ex8(){
  ketqua8 = songuyentodautien(arrays);
  
  console.log(ketqua8);                                     // o day dung bien ketqua luon cung khong sao vi khac bien ketqua o bai 1 do no nam trong ham nen chi anh huong trong ham ex do thoi
  document.getElementById("tbodySonguyentodautien").innerHTML = `<tr><td>${ketqua8}</td></tr>`;
  
}
//Bài 9:Đếm số nguyên 
// Thêm số và hiển thị mảng số thực

let arrays2 = []; //mảng cũ phải khai báo ngoài hàm mới push/unshift ăn

function mangmoi2(){
//console.log(arrays);
let idday2=addNum2();

//console.log(arrays);

 arrays2.push(idday2);



display2(arrays2);

return arrays2;
}
//Hàm thêm số
function addNum2(arrays2) {
  let idne2 = +document.getElementById("txtSothuc").value;
  return idne2;

}

// Hàm nhận vào mảng arrays2 và hiển thị ra giao diện table
function display2 (arrays2) {
  
  // DÙNG HÀM REDUCE NÓ SẼ LẶP ĐỂ LÀM DANH SÁCH
  //let html = arrays.reduce((result, value) => {
   // return (result +`<tr><td>${arrays}</td></tr>`);
  //}, "");
  
  document.getElementById("tbodySothuc").innerHTML = `<tr><td>${arrays2}</td></tr>`;
}
function demsonguyen(arrays2){
    
  let dem=0;
  let  demnguyen=dem;
  if(arrays2[0]>0){
    demnguyen =dem+ 1;
    
  }
  
  for(let i=1; i<= arrays2.length; i++){
        if(Number.isInteger(arrays2[i]) === true){
          demnguyen = demnguyen+1;
          
  }
 

  
}
return demnguyen;
}
function ex9(){
  ketqua9 = demsonguyen(arrays2);
  
  console.log(ketqua9);                                     // o day dung bien ketqua luon cung khong sao vi khac bien ketqua o bai 1 do no nam trong ham nen chi anh huong trong ham ex do thoi
  document.getElementById("tbodyDemnguyen").innerHTML = `<tr><td>${ketqua9}</td></tr>`;
  
}
//Bài 10: So sánh số lượng số lượng số âm và dương
//Hàm đếm số âm
function demsoam(arrays){
    
  let dem=0;
  let  demam=dem;
  if(arrays[0]<0){
    demam =dem+ 1;
    
  }
  
  for(let i=1; i<= arrays.length; i++){
        if(arrays[i]< 0){
          demam = demam+1;
          
  }
 

  
}
return demam;
}
function ex10(){

    let soluongsoduong=demsoduong(arrays);
    let soluongsoam=demsoam(arrays);
    if(soluongsoduong>soluongsoam){

      document.getElementById("tbodyDemsoluongamduong").innerHTML = `<tr><td>Số lượng số dương: ${soluongsoduong} NHIỀU HƠN </td><td>Số lượng số âm: ${soluongsoam}</td></tr>`;


    }
    else if(soluongsoduong<soluongsoam){
      document.getElementById("tbodyDemsoluongamduong").innerHTML = `<tr><td>Số lượng số dương: ${soluongsoduong} NHỎ HƠN </td><td>Số lượng số âm: ${soluongsoam}</td></tr>`;
      

    }
    else{
      
      document.getElementById("tbodyDemsoluongamduong").innerHTML = `<tr><td>Số lượng số dương: ${soluongsoduong} BẰNG VỚI </td><td>Số lượng số âm: ${soluongsoam}</td></tr>`;
    }

}

