import React from "react";
import DraggableWrapper from "../DraggableWrapper/DraggableWrapper";
import Recruiting from "../../assets/Recruiting.PNG";

function Card2({ classes }) {
  return (
    <DraggableWrapper id="2">
      <div className="card">
        <div className="card__section">
            <h2>Latest News</h2>
            <a className="card__action" style={{fontSize: "18px"}} href="https://testing.diverst.com/user/news_links">View all</a>
            <div className="block block-section-news">
              <div className="flex-row flex-row--middle">
                  <div className="flex-row__cell flex-row__cell--grow">
                    <h3 className="highlight" style={{marginBottom: "0"}}>
                      <a className="underline_text" href="https://testing.diverst.com/groups/93/messages/212">Stay Connected Every Day!</a>
                    </h3>
                    <small>
                      <p>While we are working from home, please check Slack or this space for any updates.</p>
                    </small>
                    <br />
                    <small className="muted">12/09/2020
                      by Tech Admin
                    </small>
                  </div>
                  <div className="flex-row__cell">
                    <span className="icon icon -chevron-right"></span>
                  </div>
              </div>
            </div>

            <div className="row block-section-news">
              <div className="col-xs-4">
                  <div id="news_link_carousel_c01c2d1f29c575613b1359da51918935" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                      <div className="item active">
                        <a data-remote="true" data-method="get" href="https://testing.diverst.com/groups/95/news_links/218/news_link_photos">
                          <img alt="" className="img-responsive center-block" src={Recruiting} />
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-xs-8">
                  <div className="flex-row flex-row--middle">
                    <div className="flex-row__cell flex-row__cell--grow">
                        <h3 style={{marginBottom: "0"}}>
                          <a data-trackable="679" className="underline_text" href="https://testing.diverst.com/groups/95/posts#news_link_218">Recruiting BIPOC Employees</a>
                        </h3>
                        <small>
                          <p><a href="https://hbr.org/2020/10/how-businesses-can-recruit-and-develop-more-young-p..."></a></p>
                        </small>
                        <br />
                        <small className="muted">10/09/2020</small>
                    </div>
                  </div>
              </div>
              <div className="modal fade" id="myModal">
                  <div className="modal-dialog" style={{width: "65%", height: "65%"}}>
                    <div className="modal-content" style={{height: "auto", minHeight: "100%",borderRadius: "0"}}>
                    </div>
                  </div>
              </div>
            </div>
            <div className="block block-section-news">
              <div className="flex-row flex-row--middle">
                  <div className="flex-row__cell flex-row__cell--grow">
                    <h3 className="highlight" style={{marginBottom: "0"}}>
                      <a className="underline_text" href="https://testing.diverst.com/groups/95/messages/208">Upcoming Workshop on Ablism </a>
                    </h3>
                    <small>
                        <p>We are planning a workshop to understand and deconstuct Ablism in the workplace.</p>
                        ...
                    </small>
                    <br />
                    <small className="muted">10/02/2020
                    by Tech Admin
                    </small>
                  </div>
                  <div className="flex-row__cell">
                    <span className="icon icon--chevron-right"></span>
                  </div>
              </div>
            </div>
            <div className="embedly-card">
              <div className="embedly-card-hug" style={{maxWidth: "600px", padding: "0", position: "relative", minWidth: "200px", margin: "5px auto"}}>
                  <div className="embdscl0"><a className="embd-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftesting.diverst.com%2Fuser%23e.s48rup.t8bqee"><i></i></a><a className="embd-twitter" href="https://twitter.com/intent/tweet?text=HEBN%20-%20LBFO%20Resistire%202020%20with%20VP%20Ofelia%20Melendrez-Kumpf%20Intro&amp;url=https%3A%2F%2Ftesting.diverst.com%2Fuser%23e.s48rup.t8bqee&amp;via=embedly"><i></i></a><a className="embd-pinterest" href="https://www.pinterest.com/pin/create/button/?description=HEBN%20-%20LBFO%20Resistire%202020%20with%20VP%20Ofelia%20Melendrez-Kumpf%20Intro&amp;media=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2H8ZEmbL4hk%2Fhqdefault.jpg&amp;url=https%3A%2F%2Ftesting.diverst.com%2Fuser%23e.s48rup.t8bqee"><i></i></a><a className="embd-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Ftesting.diverst.com%2Fuser%23e.s48rup.t8bqee"><i></i></a><a className="embd-card"><i></i></a></div>
              </div>
            </div>
        </div>
      </div>
    </DraggableWrapper>
  );
}

export default Card2;
