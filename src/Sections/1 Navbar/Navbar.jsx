import React from "react";

const Navbar = () => {
  return (
    <header>
      <div class="container border-bottom">
        <nav class="d-flex justify-content-between">
          <div>
            <img src="Assets/logo.png" alt="" />
          </div>
          <div>
            <div class="dropdown mt-4">
              <a
                class="btn dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{ width: "4rem" }}
                  src="Assets/download.png"
                  alt=""
                />
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Punjan
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sindh
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Balochishta
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    KPK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
