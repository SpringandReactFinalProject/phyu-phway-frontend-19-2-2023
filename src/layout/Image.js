// function Image(){
//     return(
//         <div id="carouselExampleFade" class="carousel slide carousel-fade container" data-bs-ride="carousel">
//         <div class="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
//           </div>
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <div className="row">
//             <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
//         <div
//           class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
//           style="background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flaw&psig=AOvVaw1lVkqoQePl6AqCvuWUf1YP&ust=1675620083239000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKj0pK-5_PwCFQAAAAAdAAAAABAE');"
//         ></div>
//       </div>
            
//             <div className="col-6">
//             <img src="assets/images/p1.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

//             </div>

            
//           </div>
//           </div>
        
//           <div class="carousel-item ">
//             <div className="row">
//             <div className="col-6">
//             <img src="assets/images/p1.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

//             </div>
            
//             <div className="col-6">
//             <img src="assets/images/tech-store-4.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

//             </div>

            
//           </div>
//           </div>

//           <div class="carousel-item ">
//             <div className="row">
//             <div className="col-6">
//             <img src="assets/images/tech-store-5.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

//             </div>
            
//             <div className="col-6">
//             <img src="assets/images/tech-store-6.jpg" className="d-block w-100"  alt="tech-store-1" ></img>

//             </div>

            
//           </div>
//           </div>
          
//         </div>
//         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>

//     );
// }
// export default Image;

function Image(){
return(
  <div class="container-fluid bg-primary py-5 mb-5 hero-header">
        <div class="container py-5">
            <div class="row justify-content-start">
                <div class="col-lg-8 text-center text-lg-start">
                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5" style="border-color: rgba(256, 256, 256, .3) !important;">Welcome To Medinova</h5>
                    <h1 class="display-1 text-white mb-md-4">Best Healthcare Solution In Your City</h1>
                    <div class="pt-2">
                        <a href="" class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Find Doctor</a>
                        <a href="" class="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
export default Image;