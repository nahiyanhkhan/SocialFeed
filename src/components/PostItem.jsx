import React from 'react';
import { format } from 'date-fns';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const PostItem = ({ post }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const formattedDate = format(new Date(post.timestamp), 'MMM d, yyyy HH:mm');

    const openLightbox = (selectedIndex) => {
        setIndex(selectedIndex);
        setIsOpen(true);
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                    <img src={post.sender.avatar} alt={post.sender.name} className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
                    <div>
                        <h6 className="card-title mb-0">{post.sender.name}</h6>
                        <small className="text-muted">{formattedDate}</small>
                    </div>
                </div>
                <p className="card-text mb-3">{post.content.text}</p>
                {post.content.media.length > 0 && (
                    <div className="row g-2 mb-3">
                        {post.content.media.map((media, index) => (
                            <div key={index} className={`col-${12 / Math.min(post.content.media.length, 3)}`}>
                                <img
                                    src={media.src}
                                    alt={`Post media ${index + 1}`}
                                    className="img-fluid rounded"
                                    onClick={() => openLightbox(index)}
                                    style={{ cursor: 'pointer', objectFit: 'cover', height: '200px', width: '100%' }}
                                />
                            </div>
                        ))}
                    </div>
                )}
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    index={index}
                    slides={post.content.media.map(media => ({ src: media.src }))}
                    plugins={[Thumbnails]}
                />
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <button className="btn btn-sm btn-outline-primary me-2">
                            <i className="bi bi-hand-thumbs-up"></i> Like ({post.likes})
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                            <i className="bi bi-chat"></i> Comment ({post.comments})
                        </button>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-share"></i> Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;