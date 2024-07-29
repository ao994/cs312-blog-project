import React from "react";

function Header() {
  return (
    <>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../App.css" />
      </head>

      <body>
        <div id="flex-container">
          <header class="d-flex flex-wrap justify-content-end justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0">
              <a
                href="/"
                class="d-inline-flex link-body-emphasis text-decoration-none"
              ></a>
            </div>

            <div>
              <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a href="#" class="nav-link px-2">
                    My Profile
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2">
                    Discover
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-2">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 text-end">
              <button type="button" class="btn btn-outline-primary me-2">
                Login
              </button>
              <button type="button" class="btn btn-primary">
                Sign-up
              </button>
            </div>
          </header>
        </div>
      </body>
    </>
  );
}

export default Header;