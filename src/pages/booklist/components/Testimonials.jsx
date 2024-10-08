import pic from "./girl.jpg";
import IonIcon from "@reacticons/ionicons";

const Testimonials = () => {
  return (
    <div className=" bg-white]">
      <h1 className="mt-48 ml-28 text-2xl underline">TESTIMONIALS</h1>
      <div className="testimonialparent p-4 rounded-xl flex">
        <div className="testimonies bg-[black] shadow-lg shadow-gray-50 w-fit h-fit p-8 text-center ">
          <div className="">
            <div>
              <div>
                <div className="text-white">
                  <img
                    className="w-[100px] h-[100px] rounded-full"
                    src={pic}
                    alt="pic"
                  />
                  <div>
                    <div>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star-half" />
                      </span>
                    </div>
                    <p>4 days ago</p>
                  </div>
                  <p>
                    <span>"</span>Remedy Online has transformed my career! The
                    self-paced courses allowed me to learn at my own speed, and
                    the instructors were top-notch!"
                  </p>
                  <br />
                  <h4>Sarah Afrakomah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonies bg-[black] shadow-lg shadow-gray-50 w-fit h-fit p-8 text-center ">
          <div className="">
            <div>
              <div>
                <div className="text-white">
                  <img
                    className="w-[100px] h-[100px] rounded-full"
                    src={pic}
                    alt="pic"
                  />
                  <div>
                    <div>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star-half" />
                      </span>
                    </div>
                    <p>4 days ago</p>
                  </div>
                  <p>
                    <span>"</span>Remedy Online has transformed my career! The
                    self-paced courses allowed me to learn at my own speed, and
                    the instructors were top-notch!"
                  </p>
                  <br />
                  <h4>Sarah Afrakomah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonies bg-[black] shadow-lg shadow-gray-50 w-fit h-fit p-8 text-center ">
          <div className="">
            <div>
              <div>
                <div className="text-white">
                  <img
                    className="w-[100px] h-[100px] rounded-full"
                    src={pic}
                    alt="pic"
                  />
                  <div>
                    <div>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star-half" />
                      </span>
                    </div>
                    <p>4 days ago</p>
                  </div>
                  <p>
                    <span>"</span>Remedy Online has transformed my career! The
                    self-paced courses allowed me to learn at my own speed, and
                    the instructors were top-notch!"
                  </p>
                  <br />
                  <h4>Sarah Afrakomah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonies bg-[black] shadow-lg shadow-gray-50 w-fit h-fit p-8 text-center ">
          <div className="">
            <div>
              <div>
                <div className="text-white">
                  <img
                    className="w-[100px] h-[100px] rounded-full"
                    src={pic}
                    alt="pic"
                  />
                  <div>
                    <div>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star" />
                      </span>
                      <span>
                        <IonIcon name="star-half" />
                      </span>
                    </div>
                    <p>4 days ago</p>
                  </div>
                  <p>
                    <span>"</span>Remedy Online has transformed my career! The
                    self-paced courses allowed me to learn at my own speed, and
                    the instructors were top-notch!"
                  </p>
                  <br />
                  <h4>Sarah Afrakomah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel static top-4 left-1/2 overflow-hidden">
        <input type="radio" name="carousel" id="slide1" checked />
        <input type="radio" name="carousel" id="slide2" checked />
        <input type="radio" name="carousel" id="slide3" checked />
        <input type="radio" name="carousel" id="slide4" checked />
        <input type="radio" name="carousel" id="slide5" checked />
      </div>
    </div>
  );
};

export default Testimonials;
