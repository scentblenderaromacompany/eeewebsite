
const ReviewSection = () => {
  return (
    <section className="py-10 bg-light">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
        <Carousel interval={10000} controls={false} indicators={true}>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <blockquote className="blockquote">
                <p className="mb-4">{review.review}</p>
                <footer className="blockquote-footer">{review.customer}</footer>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
