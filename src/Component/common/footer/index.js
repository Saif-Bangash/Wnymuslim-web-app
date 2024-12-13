/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="container py-5">
          <div className="row">
            <div class="col-md-4">
              <a href="https://wnymuslims.org" className="logo">
                <img src="https://orgwnymuslims.s3.amazonaws.com/uploads/public/60b/22b/9de/60b22b9decb86623177827.png" />
              </a>
              <p class="text-white  py-3">
                logoWe are a Non-profit 501(c)(3) community organization,
                diligent with covering events, sending weekly e-newsletters, and
                creating short videos.
              </p>
            </div>
            <div class="col-md-4 ">
              <h3 style={{ color: "brown" }}>QUICK LINKS</h3>
              <button class="btn-brown mt-3">
                <i class="fas fa-mosque" aria-hidden="true"></i> Prayer Schedule
              </button>

              <button class="btn-brown my-3">
                <i class="fas fa-mosque" aria-hidden="true"></i> Halal
                Buffalo/Niagara Restaraunts
              </button>

              <button class="btn-brown">
                <i class="fas fa-mosque" aria-hidden="true"></i> Please Donate
              </button>
            </div>

            <div class="col-md-4">
              <h3 class="text-center" style={{ color: "brown" }}>
                CONNECT WITH US
              </h3>
              <ul class="text-white list-unstyled py-3">
                <li class="pt-2 pb-2">
                  <i class="fa fa-map-o mx-2 icon-brown" aria-hidden="true"></i>{" "}
                  5959 Main Street Williamsville, NY 14221
                </li>
                <li class="pt-2 pb-2">
                  <i
                    class="fa fa-paper-plane mx-2 icon-brown"
                    aria-hidden="true"
                  ></i>{" "}
                  wnymuslims@wnymuslims.org
                </li>
                <li class="pt-2 pb-2">
                  <i
                    class="fa fa-volume-control-phone mx-2 icon-brown"
                    aria-hidden="true"
                  ></i>{" "}
                  716-923-4386
                </li>
                <li class="pt-2 pb-2">
                  <i class="fa fa-fax mx-2 icon-brown" aria-hidden="true"></i>{" "}
                  716-931-5855 (fax)
                </li>
              </ul>
            </div>
            <hr class="brown-line mt-3" />
          </div>
          <div class="row py-5">
            <div class="col-md-8">
              <p class="text-white">
                Copyrights © 2024 All Rights Reserved by WNYMuslims.org Designed
                and Developed by
              </p>
            </div>
            <div class="col-md-4">
              <ul class="d-flex p-0 m-0 list-unstyled">
                <li class="me-2 bg-dark rounded-circle p-2">
                  <a
                    href="https://www.facebook.com/WNYMuslims/"
                    class="text-white"
                  >
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="me-2 bg-dark rounded-circle p-2">
                  <a href="https://twitter.com/wnymuslims" class="text-white">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="me-2 bg-dark rounded-circle p-2">
                  <a
                    href="https://www.instagram.com/wnymuslims/"
                    class="text-white"
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="me-2 bg-dark rounded-circle p-2">
                  <a
                    href="https://www.youtube.com/user/wnymuslims"
                    class="text-white"
                  >
                    <i class="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="me-2 bg-dark rounded-circle p-2">
                  <a href="/" class="text-white">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
