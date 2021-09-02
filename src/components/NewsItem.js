import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        const { title, description, imgUrl, url } = this.props;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <img
                            src={
                                imgUrl ||
                                'https://images.livemint.com/img/2021/09/01/600x338/PUBG_New_State_1630492205140_1630492217727.PNG'
                            }
                            className="card-img"
                            alt=""
                        />
                    </div>
                    <h5 className="card-title p-3">{title}</h5>
                    <p className="px-3 card-text ">{description}</p>
                    <a
                        href={url}
                        target="_blank"
                        className="btn btn-warning w-50 mx-auto my-2"
                        rel="noreferrer"
                    >
                        Read More
                    </a>
                </div>
            </div>
        );
    }
}

export default NewsItem;
