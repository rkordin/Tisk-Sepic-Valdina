import React from "react";
import { Layout } from "../../layouts/Layout";
import { BlogLayout } from "../../layouts/BlogLayout";
import { BlogForm } from "../../components/blogs/BlogForm";
import { BlogComments } from "../../components/blogs/BlogComments";
import thumbImg from "../../assets/img/blog/details/thumb.jpg";
import thumb2Img from "../../assets/img/blog/details/thumb2.jpg";
import thumb3Img from "../../assets/img/blog/details/thumb3.jpg";

export const BlogDetails = () => {
  return (
    <Layout
      breadcrumbTitle={"Blog"}
      breadcrumbSubtitle={"Podrobnosti članka"}
    >
      <BlogLayout>
        <div className="td-postbox-wrapper td-postbox-wrapper-space td-postbox-wrapper-space-2">
          <div className="td-postbox-item mb-60">
            {/* cover img */}
            <div className="td-postbox-thumb mb-60">
              <img className="w-100" src={thumbImg} alt="Blog article" loading="lazy" />
            </div>

            {/* text */}
            <div className="td-postbox-content-2">
              <p className="mb-25">
                Digitalni tisk je v zadnjih letih doživel izjemen tehnološki
                napredek. Sodobni digitalni tiskarski stroji dosegajo kakovost,
                ki je primerljiva z offset tiskom, hkrati pa omogočajo tisk
                manjših naklad brez visokih začetnih stroškov. Za podjetja, ki
                potrebujejo hitre obrate in prilagodljive naklade, je digitalni
                tisk idealna rešitev.
              </p>
              <p>
                Pri TISK ŠEPIC razpolagamo z najsodobnejšo digitalno tiskarsko
                opremo, ki omogoča tisk na širok spekter materialov — od
                standardnih papirjev do samolepljivih materialov in folij.
                Digitalni tisk je posebej primeren za personalizirane tiskovine,
                testne serije, vizitke, letake, brošure manjših naklad ter
                embalažo za nišne izdelke. Prednost digitalnega tiska je tudi v
                tem, da ni potrebna izdelava tiskarskih plošč, kar bistveno
                skrajša čas od naročila do končnega izdelka.
              </p>
            </div>
          </div>

          <div className="td-postbox-item mb-60">
            <div className="row">
              <div className="col-sm-6">
                <div className="td-postbox-thumb mb-60">
                  <img className="w-100" src={thumb2Img} alt="Blog article" loading="lazy" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="td-postbox-thumb mb-60">
                  <img className="w-100" src={thumb3Img} alt="Blog article" loading="lazy" />
                </div>
              </div>
            </div>

            {/* text */}
            <div className="td-postbox-content-2">
              <p className="mb-35">
                Offset tisk ostaja standard za večje naklade, kjer je
                kakovost barv in ostrino detajlov nemogoče preseči. Pri
                offset tisku barvo nanašamo prek tiskarskih plošč, kar
                zagotavlja izjemno enakomerno pokritost in natačnost barv
                skozi celotno naklado.
              </p>
              <p>
                Naša tiskarna ponuja obe tehnologiji — digitalni in offset
                tisk — zato lahko stranke vedno izberejo optimalno rešitev
                glede na naklado, rok dobave in proračun. Kombinacija obeh
                pristopov nam omogoča, da pokrivamo vse od vizitke do
                večstotisočne serije embalaže. Za posvet o najprimernejši
                tehniki za vaš projekt nas kontaktirajte — z veseljem vam
                pomagamo najti pravo rešitev.
              </p>
            </div>
          </div>

          {/* comments */}
          <BlogComments />

          {/* form */}
          <BlogForm />
        </div>
      </BlogLayout>
    </Layout>
  );
};
