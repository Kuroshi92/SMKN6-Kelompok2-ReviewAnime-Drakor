import Nav from "../commponents/navbar";
import "../index.css";
import "../App.css";
import School from "../asset/schoolll.jpeg";
import { useState } from "react";
import React from "react";
import { dataschool } from "../commponents/dataschool2017";
import Footer from "../commponents/footer";

const Schoolpage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 min-w-max ">
        {/* Background gambar */}
        <div
          className="absolute top-20 right-0 bottom-0 left-0 bg-cover bg-center filter brightness-75 z-10 "
          style={{ backgroundImage: `url(${School})` }}
        />

        {/* Gambar di sebelah kiri */}
        <div className="relative z-10 w-[590px] bg-slate-900 sm:py-[5px] mt-[0.6px] bg-opacity-50">
          <img
            className="mx-auto ml-28 rounded-lg shadow-lg sm:max-w-md w-56"
            src={
              "https://bacaterus.com/wp-content/uploads/2022/02/School-2017_.webp"
            }
            alt="Movie Poster"
          />
        </div>

        {/* Informasi di sebelah kanan */}
        <div className="relative z-10 flex flex-col w-[40%] py-20 bg-slate-900 bg-opacity-50 sm:py-[33px]">
          <h1 className="text-3xl font-bold -mt-50 text-white">
          School 2017
          </h1>
          <div className="flex items-center mt-2 mb-2">
            <span className="text-lg font-semibold text-gray-200 mr-2">
              Genre:
            </span>
            <span className="flex text-lg font-semibold text-gray-200">
              <ul className="cursor-pointer hover:text-blue-400">Comedy</ul>
              &nbsp;/&nbsp;
              <ul className="cursor-pointer hover:text-blue-400">Coming Of Age</ul>
              &nbsp;/&nbsp;
              <ul className="cursor-pointer hover:text-blue-400">Romance</ul>
              &nbsp;/&nbsp;
              <ul className="cursor-pointer hover:text-blue-400">Teen</ul>
              
            </span>
          </div>
          <div className="flex items-center text-white text-lg font-semibold mt-2 mb-1">
            <span className="mr-2">Rating:</span>
            <span className="text-blue-200">8.2</span>
          </div>
          <div className="flex items-center text-white text-lg font-semibold mb-1">
            <span className="mr-2">Studio:</span>
            <span className="text-blue-200">Korea Selatan</span>
          </div>
          <div className="flex items-center text-white text-lg font-semibold mb-1">
            <span className="mr-2">Penulis:</span>
            <span className="text-blue-200">Park Jin-Suk, Jung Chan-Mi, Kim Seung-Won</span>
          </div>
          <div className="pt-9">
            <button
              type="button"
              class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-60"
            >
              <svg
                className="w-[20px] h-[24px] mt-[2px]"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                ></path>
              </svg>
              <a href="https://youtu.be/2CfbtUg98IU">Tonton Cuplikan</a>
            </button>
          </div>
        </div>
      </div>
      {/* deskripsi */}
      <div className="bg-slate-800 text-white">
        <hr className="w-full h-1  bg-gray-100 border-0  dark:bg-gray-500" />
        <div className="font-mono py-2 mx-5 font-bold text-2xl text-center text-white">Deskripsi</div>
        <hr className="w-full h-1  bg-gray-100 border-0  dark:bg-gray-500" />
        <div className="px-3 font-sans font-thin ">
          <p
            className={`whitespace-pre-wrap ${
              showMore ? "max-h-none" : "max-h-20"
            } overflow-hidden`}
          >
            <br />
            School 2017 mengisahkan tentang kehidupan siswa sekolah menengah atas, yang berusaha mengatasi stres dalam belajar.
            Protagonis utamanya adalah Ra Eun-Ho (Kim Se-Jeong), seorang gadis 18 tahun yang ceria dan baik hati.
            <br />
            <br />
            Ia memiliki mimpi menjadi seniman webtoon, tapi terjebak dalam pencarian pembuat onar misterius di sekolah, yang disebut 'Siswa X'.
            Ketika dituduh sebagai Siswa X, mimpinya untuk kuliah di jurusan seni terancam karena ia harus dikeluarkan
            <br />
            <br />
            Hyun Tae-Woon (Kim Jung-Hyun) adalah putra direktur sekolah yang menikmati masa mudanya tetapi menyembunyikan bekas luka yang dalam.
            Sementara Song Dae-Hwi (Jang Dong-Yoon) adalah siswa cerdas yang selalu menempati peringkat 1. <br />
            <br />
            <span className="font-bold">
            Namun, ia berasal dari keluarga miskin dan terancam tidak bisa melanjutkan pendidikan di universitas impiannya
            </span>
          </p>
          <button
            onClick={handleShowMore}
            className={`mt-2 text-sm font-medium ${
              showMore ? "text-gray-600" : "text-blue-600"
            } hover:text-blue-800 focus:outline-none focus:underline`}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      <div className="relative">
      <hr className="w-full h-1  bg-gray-100 border-0  dark:bg-gray-500"/>
      <div className="bg-gray-700 w-full text-center font-mono text-2xl text-white font-bold">Daftar Karakter</div>
        <hr className="w-full h-1  bg-gray-100 border-0  dark:bg-gray-500" />
        <div className="flex items-center justify-center min-h-max bg-gray-700 min-w-screen">
          <div className="flex flex-row px-4 py-8 w-screen overflow-x-auto">
            {dataschool.map((item) => (
              <div
                className="flex flex-col items-center mx-4 flex-shrink-0"
                key={item.name}
              >
                <img
                  className="w-[236px] h-44 object-cover rounded mb-4"
                  src={item.image}
                  alt={item.name}
                />
                <div className="text-center max-w-[190px]">
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-gray-500">{item.peran}</p>
                  <p className="text-gray-200">{item.seiyuu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Schoolpage;
