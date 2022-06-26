import { faStar, faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import girl from "../assets/girl.png";

const Art = ({ art }) => {
  const {
    header,
    img1,
    img2,
    img3,
    details,
    title,
    teacher,
    teacherRating,
    teacherReviewTotal,
    classRating,
    classReviewTotal,
    learners,
  } = art;
  return (
    <div>
      <h1 className="text-4xl font-bold"> {header} </h1>
      <p className="text-gray-500 font-bold mt-1">
        {title}{" "}
        <FontAwesomeIcon
          className="bg-gray-500 rounded-lg text-white outline outline-gray-400 ml-1"
          icon={faCircleQuestion}
        />
      </p>

      <div className="mt-16 grid lg:grid-cols-2">
        <div className="">
          <p>{details}</p>

          <div className="my-5 flex items-center">
            <img className="w-10 " src={girl} alt="" />
            <p className="font-bold text-purple-700 ml-2">{teacher}</p>
          </div>
          <div className="lg:flex">
            <p>
              <Rating
                initialRating={5}
                fullSymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-6 text-orange-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                }
                readonly
              />
            </p>
            <small className="mt-1 font-bold text-gray-500">
              {teacherReviewTotal} total reviews for this teacher
            </small>
          </div>
          <div className="lg:flex">
            <p>
              <Rating
                initialRating={5}
                fullSymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-6 text-orange-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                }
                readonly
              />
            </p>
            <small className="mt-1 font-bold text-gray-500">
              {classReviewTotal} total reviews for this teacher
            </small>
          </div>
          <p>Completed by {learners} learners</p>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Art;
