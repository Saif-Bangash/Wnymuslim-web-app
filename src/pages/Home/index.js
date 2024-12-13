/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66c/1da/1a0/66c1da1a0d905285869513.jpg"
              alt="First slide"
              class="d-block mx-sm-0  w-100 w-md-75 w-lg-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66c/1d9/f65/66c1d9f652dde243780069.jpg"
              alt="First slide"
              class="d-block  mx-sm-0  w-100 w-md-75 w-lg-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66c/1da/399/66c1da3991e37201437900.jpg"
              alt="Second slide"
              class="d-block  mx-sm-0 m w-100 w-md-75 w-lg-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66c/1da/5a7/66c1da5a771e5059211525.jpg"
              alt="Third slide"
              class="d-block  mx-sm-0  w-100 w-md-75 w-lg-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66c/1da/6d8/66c1da6d86caf612798743.jpg"
              alt="Fourth slide"
              class="d-block  mx-sm-0  w-100 w-md-75 w-lg-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66c/1dc/613/66c1dc613e834218196820.jpg"
              alt="Fifth slide"
              class="d-block  mx-sm-0 w-100 w-md-75 w-lg-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66c/1da/8c9/66c1da8c9d231583922064.jpg"
              alt="Seventh slide"
              class="d-block  mx-sm-0  w-100 w-md-75 w-lg-100"
            />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

           <div class="container mx-auto py-5">
  <div class="row justify-content-center text-center">
    <div class="col-md-12">
      <div class="header-center">
        <h6 class="py-2">ABOUT</h6>
        <h4 class="py-2">WNY MUSLIMS</h4>
        <p><span class="fw-bold">In The Name Of Allah The Beneficent The Merciful</span> 
          <br/>
           We are a Non-profit 501(c)(3) community organization, diligent
          with covering events, sending weekly e-newsletters, and creating
          short videos.</p>
      
      </div>
    </div>
  </div>
</div>

{/* Iframe Section */}
<div class="container-fluid mx-auto ">
  <div class="row justify-content-center py-5 m-0">
    <div class="col-md-12 d-flex justify-content-center">
      <iframe
        height={400}
        src="https://www.youtube.com/embed/6BsPsyPKwYw"
        title="YouTube video player"
        class="VideoPlayer w-100 w-md-75 mx-4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>

      <section class="parallax-section">
        <div class="container py-5">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <form class="py-5">
                <div class="form-group">
                  <input
                    name="first_name"
                    type="text"
                    class="form-control bg-transparent"
                    placeholder="First name"
                  />
                </div>
                <div class="form-group py-4">
                  <input
                    name="last_name"
                    type="text"
                    class="form-control bg-transparent"
                    placeholder="Last name"
                  />
                </div>
                <div class="input-group">
                  <input
                    name="email"
                    type="text"
                    class="form-control bg-transparent"
                    placeholder="john.smith@example.com"
                  />
                  <span class="input-group-btn">
                    <button
                      class="btn btn-default bg-danger mx-2 text-white my-2"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </span>
                </div>
              </form>
            </div>

            <div class="col-md-6 text-center tilt_animation">
              <div>
                <a href="https://www.wnymuslims.org/newsletter">
                  <img
                    src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/628/cf0/cff/628cf0cff24f4851750601.png"
                    width="300px"
                    alt="Newsletter Image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container py-5">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/60e/c3a/b0d/thumb_615_0_0_0_0_auto.png"
                width="100%"
              />
            </div>
          </div>
          <div class="col-md-4 mb-4 mb-4">
            <div class="card">
              <img
                src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/60e/c3a/ad6/thumb_614_0_0_0_0_auto.png"
                width="100%"
              />
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/60e/c3a/a72/thumb_613_0_0_0_0_auto.png"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row py-3">
          <div class="header-center">
            <h2 class="text-center">FEATURED EVENTS</h2>
          </div>
          <div class="col-md-4">
            <div class="card no-border">
              <img src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66b/fa0/c22/thumb_2802_620_0_0_0_crop.jpg" />
            </div>
            <p class="text-center fw-bold">
              Fundraising Event with Adnan Sidiqqui
            </p>
          </div>
          <div class="col-md-4">
            <div class="card no-border">
              <img
                src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66a/398/9de/thumb_2770_620_0_0_0_crop.jpg"
                alt="Events and Announcements"
              />
            </div>
            <p class="text-center fw-bold">Events and Announcements</p>
          </div>
          <div class="col-md-4">
            <div class="card no-border">
              <img
                src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66a/399/227/thumb_2771_620_0_0_0_crop.jpg"
                alt="Prayer Schedule"
              />
            </div>
            <p class="text-center fw-bold">Prayer Schedule</p>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="headerCard-center">
          <h4 class="text-center" style={{ color: "brown" }}>
            ANNOUNCEMENTS
          </h4>
          <p class="text-center fs-5">CUMMUNITY ANNOUNCEMENTS</p>
        </div>
        <p class="text-center">
          We organize events throughout the year such as:
        </p>
        <div class="row py-5">
          <div class="col-md-4 mb-4">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/674/a03/694/thumb_2972_350_250_0_0_crop.jpg"
              alt="img"
              class="img-fluid px-4"

            />
            <p class="text-center py-2">Happy & Blessed Thanksgiving!</p>
          </div>
          <div class="col-md-4  mb-4">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/66c/8c4/6bd/thumb_2925_350_250_0_0_crop.jpg"
              alt="img"
              class="img-fluid px-4"

            />
            <p class="text-center  py-2">
              Celebrating Awareness, Diversity & Service 2024
            </p>
          </div>
          <div class="col-md-4  mb-4 ">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/657/c70/ec3/thumb_2188_350_250_0_0_crop.png"
              alt="img"
              class="img-fluid px-4"
            />
            <p class="text-center  py-2">
              Fundraising Gala Dinner, Buffalo USA 2023
            </p>
          </div>
        </div>
      </div>

      <section class="custom-section py-4">
  <div class="container-fluid px-0"> 
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 bg-white p-4 border-brown">
        <div class="d-flex justify-content-between align-items-center mt-3">
          <div>
            <div class="d-flex align-items-center mb-2">
              <i class="fa fa-angle-double-right mx-2"></i>
              <span>Donate to WNYMuslims</span>
            </div>
            <div class="d-flex align-items-center mb-2">
              <i class="fa fa-angle-double-right mx-2"></i>
              <span>Donate to WNYMuslims</span>
            </div>
            <div class="d-flex align-items-center mb-2">
              <i class="fa fa-angle-double-right mx-2"></i>
              <span>Donate to WNYMuslims</span>
            </div>
          </div>

          <div class="text-end">
            <img
              src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/60b/33c/14e/thumb_511_200_200_0_0_auto.png"
              alt="history"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-3">
      <button class="btn btn-brown btn-sm">DONATE NOW!</button>
    </div>
  </div>
</section>


      <div class="container py-5">
        <div class="row ">
          <div class="col-md-12">
            <div class="headerCard-center">
              <h3 class="text-center" style={{ color: "brown" }}>
                EVENTS
              </h3>
              <p class="text-center fs-5"> UPCOMPING EVENTS</p>
            </div>
            <p class="text-center">
              We organize events throughout the year such as:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
