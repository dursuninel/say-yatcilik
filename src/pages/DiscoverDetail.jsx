import React from "react";
import PageBanner from "../components/PageBanner";

export default function DiscoverDetail() {
  return (
    <>
      <PageBanner
        title={`Çocuklarla Yelken ve Deniz Tatili Yapmanın İpuçları`}
        breadpoint={[
          { title: "Anasayfa", link: "/" },
          { title: "Keşfet", link: "/discover" },
          {
            title: `Çocuklarla Yelken ve Deniz Tatili Yapmanın İpuçları`,
          },
        ]}
        image={require("../assets/images/detail.png")}
        content={
          <>
            <p>
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
              olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
              kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
              sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
              yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker
              gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları
              ile popüler olmuştur.
            </p>
            <p>
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
              olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
              kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
              sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
              yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker
              gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları
              ile popüler olmuştur.
            </p>
            <p>
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
              olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
              kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
              sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
              yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker
              gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları
              ile popüler olmuştur.
            </p>{" "}
          </>
        }
      />

      {/* Keşfet */}
      <section>
        <div className="container">
          <h2>İlgili Bloglar</h2>
          <div className="announcements_main list">
            <div className="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div className="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <p>içerik</p>
                <a href="/">Devamını Oku</a>
              </div>
            </div>

            <div className="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div className="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <a href="/">Devamını Oku</a>
              </div>
            </div>

            <div className="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div className="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <a href="/">Devamını Oku</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
