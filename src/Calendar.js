import React from 'react'

function Calendar() {
  return (
    <>
    <section class="about-section text-center" id="calendar">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="text-black mb-4">ตารางบันทึกวีดิทัศน์</h2>
                        <br></br>
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FBangkok&showTitle=0&src=Y184NDJiZjViMjZmZDFjZGNkMDQwYTQ0NDNiYTEwYjI0ZGYyMTI2ZDVlNmVjNjVhOTMyMDhlYWMxMDRhNWRiZjRjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udGgjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%230B8043" 
                            title="Calendar" width="1024" height="668" frameborder="0" scrolling="no"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Calendar
