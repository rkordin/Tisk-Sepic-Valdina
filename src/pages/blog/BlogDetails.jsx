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
      breadcrumbTitle={"Insights Details"}
      breadcrumbSubtitle={"Blog Details"}
    >
      <BlogLayout>
        <div className="td-postbox-wrapper td-postbox-wrapper-space td-postbox-wrapper-space-2">
          <div className="td-postbox-item mb-60">
            {/* cover img */}
            <div className="td-postbox-thumb mb-60">
              <img className="w-100" src={thumbImg} alt="thumb" />
            </div>

            {/* text */}
            <div className="td-postbox-content-2">
              <p className="mb-25">
                Hygrometern is a minimal housing project located in Ystad,
                Sweden, designed by Johan Sundberg Arkitektur. Twenty units
                overall, evenly distributed between two-room and three-room
                flats, are housed in the project’s four two-story structures.
                The proposal is divided into several smaller built volumes
                rather than having all the flats combined into one large volume.
                This separation generates interstices that give the common
                courtyard a variety of entrances and the building volumes a
                sympathetic scale. The distinct built volumes might also take
                advantage of the site’s varied contours helson dowson.
                Hygrometern is a minimal housing project located in Ystad,
                Sweden, designed by Johan Sundberg Arkitektur.
              </p>
              <p>
                With larch-covered facades, galvanized steel balcony railings
                and staircases, painted aluminum metalwork features, and
                windows, the structures all speak the same language of
                materials. Variations in the floor plan, window location, and
                interstitial outdoor spaces enhance this material homogeneity.
                The goal was to produce a unified whole using a modern design
                language, where attention to materiality and detail is evident.
                All flats have two sides and are in close proximity to the
                outside world. Apartments on the ground floor have sizable
                patios, while apartments on the second floor have sizable
                balconies. Full height glass partitions ensure that both
                apartments maintain a comfortable temperature all year long. The
                internal courtyard, which is surrounded by an extended storage
                building, gives residents access to both public and private
                areas. The site’s level differences are used to divide parking
                spaces and waste facilities from the private patios as you
                approach the street.
              </p>
            </div>
          </div>

          <div className="td-postbox-item mb-60">
            <div className="row">
              <div className="col-sm-6">
                <div className="td-postbox-thumb mb-60">
                  <img className="w-100" src={thumb2Img} alt="thumb" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="td-postbox-thumb mb-60">
                  <img className="w-100" src={thumb3Img} alt="thumb" />
                </div>
              </div>
            </div>

            {/* text */}
            <div className="td-postbox-content-2">
              <p className="mb-35">
                On the one hand, a contemporary residential building with all
                the amenities and services essential for a modern lifestyle was
                needed. On the other hand, they are confronted with a
                complicated and divided structure that is challenging to
                integrate with a protected façade and volume from the 16th
                century.
              </p>
              <p>
                The use of local, noble, natural materials that highlight the
                essence of the Mediterranean has been crucial. All of the
                project’s materials are from a limited palette of natural
                substances. The restoration of historical aspects is combined.
                These components are mixed with the addition of new, noble ones,
                such as old bronze objects, regional stones, mirrored fabrics,
                porcelain accents, and regional cotton and linen textiles. The
                project restores the entrance courtyard to its former splendor
                after it had been altered by reforms made in the previous
                century.
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
