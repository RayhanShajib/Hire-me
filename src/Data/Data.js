const users =[
    {'name':'Mr. Mac', 'phone':'203-780-7619', 'address':'Bardwell, Texas', 'salary': 150000, 'email':'Mac@april.biz', 'img':' people/Mac.jpg', 'profession':'Full Stack Web Developer'},
    {'name':'Graham Cocron', 'phone':'208-969-4582', 'address':'Burien, Washington', 'salary': 120000, 'email':'Cocron@april.biz', 'img':' people/Cocron.jpg', 'profession':'Software Engineer'},
    {'name':'Ervin Howell', 'phone':'605-237-7820', 'address':'WETMORE, Michigan', 'salary': 135000, 'email':'Howell@classesmail.com', 'img':' people/Howell.jpg', 'profession':'Android App Developer'},
    {'name':'Jesse D McDonough', 'phone':'612-298-0945', 'address':'Eden Prairie, Minnesota', 'salary': 168000, 'email':'McDonough@groupbuff.com', 'img':' people/McDonough.jpg', 'profession':'UI/UX Designer'},
    {'name':'Jim E Foster', 'phone':'678-623-9615', 'address':'Atlanta, Georgia', 'salary': 238000, 'email':'Foster@classesmail.com', 'img':' people/Foster.jpg', 'profession':'Front-end Web Developer'},
    {'name':'Paul S McMillin', 'phone':'407-239-7857', 'address':'Kissimmee, Florida', 'salary': 200000, 'email':'McMillin@classesmail.com', 'img':' people/McMillin.jpg', 'profession':'Back-end Web Developer'},
    {'name':'Steve S Young', 'phone':'260-786-0062', 'address':'Andrews, Indiana', 'salary': 190000, 'email':'Steve@meantinc.com', 'img':' people/Steve.jpg', 'profession':'Full Stack Web Developer'},
    {'name':'John A Harper', 'phone':'559-527-1860', 'address':'Fresno, California', 'salary': 195000, 'email':'Harper@groupbuff.com', 'img':' people/Howell.jpg', 'profession':'Back-end Web Developer '},
    {'name':'Bob V Cortez', 'phone':'518-409-2598', 'address':'Latham, New York', 'salary': 170000, 'email':'Cortez@gmail.com', 'img':' people/Cortez.jpg', 'profession':'Front-end Web Developer '},
    {'name':'Jason L Cho', 'phone':'585-576-2705', 'address':'Rochester, New York', 'salary': 145000, 'email':'Cho@groupbuff.com', 'img':' people/Cho.jpg', 'profession':'Software Engineer'},
    {'name':'Jason L Cho', 'phone':'585-576-2705', 'address':'Rochester, New York', 'salary': 145000, 'email':'Cho@groupbuff.com', 'img':' people/Cho.jpg', 'profession':'Software Engineer'},
    {'name':'George J Saenz', 'phone':'206-243-6080', 'address':'Burien, Washington', 'salary': 150000, 'email':'Saenz@meantinc.com', 'img':' people/Saenz.jpg', 'profession':'UI/UX Designer'},
    {'name':'Amos K Triplett', 'phone':'678-804-9901', 'address':'Smyrna, Georgia', 'salary': 175000, 'email':'Triplett@classesmail.com', 'img':' people/Triplett.jpg', 'profession':'Android App Developer'},
    {'name':'Cory C Anthony', 'phone':'903-382-7102', 'address':'Miller Grove, Texas', 'salary': 160000, 'email':'Anthony@groupbuff.com', 'img':' people/Anthony.jpg', 'profession':'Full Stack Web Developer'},
    {'name':'Ramon A Rice', 'phone':'713-266-6159', 'address':'Houston, Texas', 'salary': 185000, 'email':'Ramon@powerencry.com', 'img':' people/Ramon.jpg', 'profession':'Front-end Web Developer'},
    {'name':'David N Alvarez', 'phone':'520-575-0530', 'address':'Tucson, Arizona', 'salary': 250000, 'email':'Alvarez@meantinc.com', 'img':' people/Alvarez.jpg', 'profession':'Software Engineer'},
]

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(users);

export default users;