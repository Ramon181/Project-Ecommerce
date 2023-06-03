import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewId, postReview } from "../../../redux/action/reviewAction";

const Review = ({ id }) => {

  const [stars, setStars] = useState(0);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const review = useSelector((state) => state.reviews);
  const user = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getReviewId(id))
  }, [dispatch, id])

  const handleSubmit = () => {
    const newReview = {
      productId: id,
      stars: stars,
      description: description,
      userName: user.userName
    };

    function createImageWithInitialLetter(text, imageWidth, imageHeight, backgroundColor, textColor, font) {
      // Crear un elemento canvas
      const canvas = document.createElement('canvas');
      canvas.width = imageWidth;
      canvas.height = imageHeight;
    
      // Obtener el contexto de dibujo en 2D del lienzo
      const ctx = canvas.getContext('2d');
    
      // Establecer el color de fondo
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, imageWidth, imageHeight);
    
      // Establecer el color y la fuente del texto
      ctx.fillStyle = textColor;
      ctx.font = font;
    
      // Obtener la primera letra del texto
      const initial = text.charAt(0).toUpperCase();
    
      // Calcular la posición para centrar el texto
      const textWidth = ctx.measureText(initial).width;
      const x = (imageWidth - textWidth) / 2;
      const y = (imageHeight + parseInt(font)) / 2;
    
      // Dibujar el texto en el lienzo
      ctx.fillText(initial, x, y);
    
      // Crear una imagen a partir del lienzo
      const image = new Image();
      image.src = canvas.toDataURL();
    
      return image;
    }
    
    // Ejemplo de uso
    const text = 'Hola Mundo';
    const imageWidth = 200;
    const imageHeight = 200;
    const backgroundColor = '#ffffff';
    const textColor = '#000000';
    const font = 'bold 100px Arial';
    
    const image = createImageWithInitialLetter(text, imageWidth, imageHeight, backgroundColor, textColor, font);
    
    // Agregar la imagen al documento HTML
    document.body.appendChild(image);
    dispatch(postReview(newReview));
  }


  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="px-10 w-full">
        <div className="flex flex-col">
          <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
            Product Review
          </h1>
          {
            review.map((review) => (


              <div key={review.productId}
                className="flex-col w-full pb-1 pt-2 mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:pb-1 sm:pt-2 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                <div className="flex flex-row md-10">
                  <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                  <div className="flex-col mt-1">
                    <div className="flex items-center space-x-2 flex-1 px-4 font-bold leading-tight">
                      <h2>
                        {review.userName}
                      </h2>
                      <div className="flex mt-[2px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                      {review.description}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-end space-x-1 items-center">
                  <button className="inline-flex flex-column">
                    <svg className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                      viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                        fillRule="nonzero" />
                    </svg>
                  </button>
                  <button className="inline-fle flex-column">
                    <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          }

        </div>


        <form>
          <div className="mt-4 w-2/3 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post comment
              </button>
              <div className="flex pl-0 space-x-1 sm:pl-2">

              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Review;
