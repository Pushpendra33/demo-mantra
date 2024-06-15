/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  commonFields,
  labels,
  manageUndefined,
  metamaskErrorMessages,
  notificationSetting,
  notificationType,
  routesList,
  showNotification,
} from "../Common";
import { GlobalForm, GlobalInput as Input, GlobalModal } from "../Global";
import { registerSchema } from "../Validations";

const Header = () => {
  const [modal, setModal] = useState({
    registerModal: false,
  });

  const [isStripClosed, setIsStripClosed] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [form, setForm] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const [confPasswordShown, setConfPasswordShown] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    setIsStripClosed(() => {
      return false;
    });
  }, []);

  useEffect(async () => {
    setWalletConnected(true);
  }, []);

  const connectWalletPressed = async () => {
    setWalletConnected(true);
  };

  const setModalOpen = (modal_type, ...rest) => {
    if (modal_type === "register_modal") {
      setModal({ ...modal, registerModal: true });
    }
  };

  const setModalClose = (modal_type, ...rest) => {
    if (modal_type === "register_modal") {
      setModal({ ...modal, registerModal: false });
    }
  };

  const togglePassword = (fieldType) => {
    console.log("Field Type: ", fieldType);
  };

  const handleTradingBot = (modalName) => {
    if (walletConnected) {
      setModalOpen(modalName);
    } else {
      showNotification(
        notificationType.DANGER,
        metamaskErrorMessages.connetMetamask,
        notificationSetting
      );
    }
  };
  const handleInputChange = (event, data) => {
    setForm({ ...form, [data.name]: data.value });
  };

  const handleModalClose = (modalName) => {
    setForm({});
    reset();
    setModalClose(modalName);
  };

  const handleRegistration = (data, event) => {
    alert("Registered");
  };

  return (
    <>
      <header>
        <div className="topTeam">
          {false && (
            <div className="stripmint">
              You need Metamask to interact with this site.{" "}
              <a
                href={"https://metamask.io/download/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Click here to install.
              </a>
              <a
                className="closeStrip clickable"
                onClick={() => setIsStripClosed(true)}
              >
                <i className="bi bi-x-lg"></i>
              </a>
            </div>
          )}
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href={routesList.homePage}>
                <img
                  src="images/logo.png"
                  alt=""
                  title=""
                  className="img-fluid"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  {" "}
                  X
                </button>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    {walletConnected && (
                      <Link
                        to="/dashboard"
                        className="nav-link btn btn-blue clickable"
                      >
                        Dashboard
                      </Link>
                    )}
                  </li>
                  {/* <li className="nav-item">
                    {!walletConnected ? (
                      <button
                        type="button"
                        className="nav-link btn btn-purple"
                        onClick={connectWalletPressed}
                      >
                        {labels.connect_wallet}
                      </button>
                    ) : (
                      <Link
                        className="nav-link btn btn-purple" //onClick={mintNFT}>
                        to={routesList.mint}
                      >
                        {labels.mint}
                      </Link>
                    )}
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {modal.registerModal && (
        <GlobalModal
          id={"register-modal"}
          isOpen={modal.registerModal}
          isCloseButtonDisplay={true}
          isHeaderDisplay={false}
          modalClassName={"trading_tool"}
          dialogClassName={"modal-xl"}
          modalId={"register"}
          onModalClose={() => handleModalClose("register_modal")}
        >
          <div className="container">
            <div className="row h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px", border: "none" }}
                >
                  <div className="card-body px-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="h1 fw-bold mb-5 mt-4">Register</p>
                        <GlobalForm
                          className="mx-1"
                          onSubmit={handleSubmit(handleRegistration)}
                        >
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <Input
                                label={commonFields.NAME}
                                labelClassName={"form-label"}
                                type="text"
                                className="form-control"
                                placeholder="John Deo"
                                id="name"
                                name="name"
                                value={form.name || ""}
                                {...register("name")}
                                onChange={(e, data) => {
                                  register("name").onChange(e);
                                  handleInputChange(e, data);
                                }}
                                errorType={manageUndefined(errors?.name)}
                                errorMessage={manageUndefined(
                                  errors?.name?.message
                                )}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <Input
                                label={commonFields.EMAIL}
                                labelClassName={"form-label"}
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                id="email"
                                name="email"
                                value={form.email || ""}
                                {...register("email")}
                                onChange={(e, data) => {
                                  register("email").onChange(e);
                                  handleInputChange(e, data);
                                }}
                                errorType={manageUndefined(errors?.email)}
                                errorMessage={manageUndefined(
                                  errors?.email?.message
                                )}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0 relative">
                              <i
                                className={"bi bi-eye-slash"}
                                onClick={() => togglePassword("password")}
                                id="togglePassword"
                              ></i>
                              <Input
                                label={commonFields.PASSWORD}
                                labelClassName={"form-label"}
                                type={passwordShown ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                id="password"
                                name="password"
                                value={form.password || ""}
                                {...register("password")}
                                onChange={(e, data) => {
                                  register("password").onChange(e);
                                  handleInputChange(e, data);
                                }}
                                errorType={manageUndefined(errors?.password)}
                                errorMessage={manageUndefined(
                                  errors?.password?.message
                                )}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0 relative">
                              <i
                                className={"bi bi-eye-slash"}
                                onClick={() =>
                                  togglePassword("confirmPassword")
                                }
                                id="togglePassword2"
                              ></i>
                              <Input
                                label={`Confirm ${commonFields.PASSWORD}`}
                                labelClassName={"form-label"}
                                type={confPasswordShown ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={form.confirmPassword || ""}
                                {...register("confirmPassword")}
                                onChange={(e, data) => {
                                  register("confirmPassword").onChange(e);
                                  handleInputChange(e, data);
                                }}
                                errorType={manageUndefined(
                                  errors?.confirmPassword
                                )}
                                errorMessage={manageUndefined(
                                  errors?.confirmPassword?.message
                                )}
                              />
                            </div>
                          </div>

                          <div className="form-check d-flex mb-4 relative">
                            <div className="termsCondition">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="termsCondition"
                                name="termsCondition"
                                value={form.termsCondition || ""}
                                {...register("termsCondition")}
                                onChange={(e, data) => {
                                  register("termsCondition").onChange(e);
                                  handleInputChange(e, data);
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="termsCondition"
                              >
                                I agree all statements in{" "}
                                <a
                                  href={routesList.tnc}
                                  target="_blank"
                                  rel={"noreferrer"}
                                  className="clickable text-primary"
                                >
                                  Terms of service
                                </a>
                              </label>
                              {manageUndefined(errors?.termsCondition) &&
                                (manageUndefined(errors?.termsCondition) !==
                                  "" ||
                                  manageUndefined(errors?.termsCondition) !==
                                    "undefined") && (
                                  <span className="error-feedback d-block">
                                    {errors?.termsCondition?.message}
                                  </span>
                                )}
                            </div>
                          </div>

                          <div className="d-flex mb-3 mb-lg-4">
                            <button type="button" className="btn btn-purple">
                              Register
                            </button>
                          </div>
                        </GlobalForm>
                        <p className="loginTxt">
                          If you have already registered, please login{" "}
                          <a
                            target={"_blank"}
                            rel="noreferrer"
                            href="http://bot.Projectsindex.com/"
                          >
                            here
                          </a>
                          .
                        </p>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 formRegister">
                        <img
                          src="images/register.png"
                          className="img-fluid"
                          alt="Sample"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlobalModal>
      )}
    </>
  );
};

export default Header;
