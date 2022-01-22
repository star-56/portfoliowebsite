console.log("script running...")
document.querySelector('.cross').style.diplay='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.diplay='inline';
        document.querySelector('.cross').style.diplay='none';
    }
    else{
        document.querySelector('.ham').style.diplay='none';
        setTimeout(()=>{
            document.querySelector('.cross').style.diplay='inline';
        },300);
    }
})
