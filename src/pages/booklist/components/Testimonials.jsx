import pic from "./girl.jpg";
import pic1 from "./guy1.png";
import pic2 from"./lady.jpg";
import pic3 from "./student-guyy.jpg";
import IonIcon from "@reacticons/ionicons";

const Testimonials = () => {
  return (
    <div className=" bg-white]">
      <h1 className="mt-48 ml-[550px] text-4xl underline font-semibold ">TESTIMONIALS</h1>
      <div className="testimonialparent p-4 rounded-xl flex gap-10 mt-10 ">
        <div className="testimonies bg-[#0E345A] shadow-lg shadow-black w-fit h-fit p-8 text-center ">
          <div className="">
            <div>
              <div>
                <div className="text-white">
                  <img
                    className="w-[100px] h-[100px] rounded-full ml-16 mb-6"
                    src={pic}
                    alt="pic"
                  />
                  <div className="flex justify-evenly">
                    <div className="text-[yellow]">
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
                    <span>"</span>This was overall a wonderful experience that I would highly recommend to anyone I know who wants to improve their instruction practices. It has fundamentally changed how I approach Special Collections and Archives instruction!"
                  </p>
                  <br />
                  <h4>Sarah Afrakomah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonies bg-[#0E345A] shadow-lg shadow-black w-fit h-fit p-8 text-center ">
          <div className="">
            <div>
              <div>
                <div className="text-white">
                  <img
                    className="w-[100px] h-[100px] rounded-full ml-16 mb-6"
                    src={pic1}
                    alt="pic"
                  />
                  <div className="flex justify-evenly">
                    <div className="text-[yellow]">
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
                    <p>1 week ago</p>
                  </div>
                  <p>
                    <span>"</span>Remedy Online has transformed my career! The
                    self-paced courses allowed me to learn at my own speed, and
                    the instructors were top-notch!"
                  </p>
                  <br />
                  <h4>Abdullah Hussein</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonies bg-[#0E345A] shadow-lg shadow-black w-fit h-fit p-8 text-center ">
          <div className="">
            <div>
              <div>
                <div className="text-white">
                  <img
                    className="w-[100px] h-[100px] rounded-full ml-16 mb-6"
                    src={pic2}
                    alt="pic"
                  />
                  <div className="flex justify-evenly">
                    <div className="text-[yellow]">
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
                    <p>1 months ago</p>
                  </div>
                  <p>
                    <span>"</span>Remedy Online has transformed my career! The
                    self-paced courses allowed me to learn at my own speed, and
                    the instructors were top-notch!"
                  </p>
                  <br />
                  <h4>Jane Smith</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonies bg-[#0E345A] shadow-lg shadow-black w-fit h-fit p-8 text-center ">
          <div className="">
            <div>
              <div>
                <div className="text-white">
                  <img
                    className="w-[100px] h-[100px] rounded-full ml-16 mb-6"
                    src={pic3}
                    alt="pic"
                  />
                  <div className="flex justify-evenly">
                    <div className="text-[yellow]">
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
                    <p>3 months ago</p>
                  </div>
                  <p>
                    <span>"</span>Remedy Online has transformed my career! The
                    self-paced courses allowed me to learn at my own speed, and
                    the instructors were top-notch!"
                  </p>
                  <br />
                  <h4>Stephen Appiah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel static top-4 left-1/2 overflow-hidden ml-[700px]">
        <input className="cursor-pointer" type="radio" name="carousel" id="slide1" checked />
        <input className="cursor-pointer" type="radio" name="carousel" id="slide2" checked />
        <input className="cursor-pointer" type="radio" name="carousel" id="slide3" checked />
        <input className="cursor-pointer" type="radio" name="carousel" id="slide4" checked />
        <input className="cursor-pointer" type="radio" name="carousel" id="slide5" checked />
      </div>
    </div>
  );
};

export default Testimonials;
