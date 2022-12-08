import { Container, Row, Col } from 'react-bootstrap'
import brandLogo from '../assests/brand-logo.png'

const Contact = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      <h1 className="display-4 mt-2 mb-4">Contact Us</h1>
      <Row>
        <Col md={10}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          hic laboriosam suscipit labore in expedita alias. Distinctio quam fuga
          perferendis recusandae natus amet provident incidunt fugit soluta
          facere eos quis praesentium, illo officiis facilis sed dolorem,
          impedit porro nisi eveniet? Illo qui iste quisquam nisi magni
          molestiae. Dolor impedit obcaecati, amet voluptates quidem cupiditate
          voluptatem aperiam ipsa deserunt? Ipsum reiciendis tempora,
          reprehenderit ducimus rem temporibus a repudiandae. Ratione vero fugit
          officia magni repellendus quis, fugiat vel ipsum pariatur, omnis
          quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          hic laboriosam suscipit labore in expedita alias. Distinctio quam fuga
          perferendis recusandae natus amet provident incidunt fugit soluta
          facere eos quis praesentium, illo officiis facilis sed dolorem,
          impedit porro nisi eveniet? Illo qui iste quisquam nisi magni
          molestiae. Dolor impedit obcaecati, amet voluptates quidem cupiditate
          voluptatem aperiam ipsa deserunt? Ipsum reiciendis tempora,
          reprehenderit ducimus rem temporibus a repudiandae. Ratione vero fugit
          officia magni repellendus quis, fugiat vel ipsum pariatur, omnis
          quidem.
        </Col>
        <Col md={2}>
          <img src={brandLogo} alt="brand" style={{ height: "200px" }} />
        </Col>
      </Row>
			<hr />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus vero similique aliquid tenetur recusandae voluptates laborum quis inventore, fugit animi doloribus ipsam doloremque labore accusamus velit quaerat dicta fuga minus ullam possimus. Odio, nulla tenetur sint hic qui quis itaque quia minima iste modi architecto eveniet totam laudantium eius dolores soluta magnam numquam voluptatibus aliquid. Quos vero corrupti, id qui doloribus molestias incidunt vitae deleniti officia asperiores quidem aspernatur magni saepe pariatur dignissimos suscipit voluptate aut tempore sit, odio doloremque! Voluptatem libero consectetur fuga, obcaecati necessitatibus non porro rerum quia, explicabo quas labore, doloribus esse quis ab eos distinctio. Maiores provident repellat quasi! Id iste, porro minus voluptatem praesentium corrupti laudantium repellendus quae vitae ad ratione maxime sit harum aspernatur doloribus iusto consequatur fuga! Sequi repudiandae ut amet assumenda delectus dolorem, maiores ipsam cum suscipit deserunt officiis impedit laboriosam. Optio possimus fugit omnis est quis tenetur incidunt beatae id. Repudiandae ut voluptatum, eum, alias deserunt earum quas non sint repellat quod sit cumque enim molestiae perferendis culpa debitis fugiat numquam veritatis animi cupiditate ipsa architecto vitae! Facere repellat consequuntur quas enim, rem aliquam explicabo animi accusantium suscipit id, tenetur dolorem distinctio voluptas neque aperiam, nam vel delectus? Similique, quas assumenda.
			</p>
    </Container>
  );
}

export default Contact;