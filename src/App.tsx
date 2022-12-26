import Accordion from './components/Accordion';
import Alert from './components/Alert';
import Avatar from './components/Avatar';
import AvatarStack from './components/AvatarStack';
import Badge from './components/Badge';
import Breadcrumb from './components/Breadcrumb';
import Container from './components/Container';
import Section from './components/Section';

const USER_LIST = [
  {
    image: 'https://i.pravatar.cc/150?img=1',
    label: 'LG',
  },
  {
    image: 'https://i.pravatar.cc/150?img=2',
    label: 'EH',
  },
  {
    label: 'CB',
  },
  {
    label: 'PL',
  },
  {
    image: 'https://i.pravatar.cc/150?img=5',
    label: 'CD',
  },
  {
    image: 'https://i.pravatar.cc/150?img=6',
    label: 'MDS',
  },
  {
    label: 'KW',
  },
  {
    image: 'https://i.pravatar.cc/150?img=8',
    label: 'NRV',
  },
  {
    image: 'https://i.pravatar.cc/150?img=9',
    label: 'GR',
  },
  {
    image: 'https://i.pravatar.cc/150?img=10',
    label: 'CD',
  },
];

const ACCORDION_ITEMS = [
  {
    title: 'Title 1',
    value: 'title-1',
    content: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi,
        libero cupiditate similique veniam consectetur modi eaque, eos deleniti
        reiciendis dolorem nemo suscipit doloribus! Labore similique eveniet quo
        enim ullam?
      </p>
    ),
  },
  {
    title: 'Title 2',
    value: 'title-2',
    content:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quia animi, libero cupiditate similique veniam consecteturmodi eaque, eos deleniti reiciendis dolorem nemo suscipitdoloribus! Labore similique eveniet quo enim ullam?',
  },
  {
    title: 'Title 3',
    value: 'title-3',
    content: (
      <>
        <p>deneme content</p>
        <br />
        <Badge
          color="danger"
          label="Badge"
          size="small"
          outline
          rounded
          onClick={() => alert('xx')}
          className="deneme"
          style={{ cursor: 'pointer' }}
        />
      </>
    ),
  },
];

const BREADCRUMB_ITEMS = [
  { label: 'Emlak', url: '#' },
  { label: 'Konut', url: '#' },
  { label: 'Kiralık', url: '#' },
  { label: 'Daire', url: '#' },
];

const BREADCRUMB_ITEMS_2 = [
  { label: 'Anasayfa', url: '#' },
  { label: 'Bilgisayarlar', url: '#' },
  { label: 'Çevre Birimleri', url: '#' },
  { label: 'Klavyeler', url: '#' },
  { label: 'Mekanik Klavyeler', url: '#' },
];

const App = () => {
  return (
    <>
      <Container>
        <Section
          title="Avatar"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          closed
        >
          <Avatar
            image="https://i.pravatar.cc/150?img=12"
            label="NCD"
            size="xsmall"
          />

          <Avatar
            image="https://i.pravatar.cc/150?img=12"
            label="NCD"
            size="small"
            circle
          />

          <Avatar
            image="https://i.pravatar.cc/150?img=12"
            label="NCD"
            rounded
          />

          <Avatar label="NCD" size="large" color="danger" />
        </Section>

        <Section
          title="Avatar Stack"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          closed
        >
          <AvatarStack list={USER_LIST} circle size="xsmall" />
          <AvatarStack list={USER_LIST} max={4} circle size="small" />
          <AvatarStack list={USER_LIST} circle />
          <AvatarStack list={USER_LIST} max={7} size="large" />
        </Section>

        <Section
          title="Alert"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          closed
        >
          <Alert id="deneme" onClick={() => alert('xx')}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
            architecto nemo explicabo quae animi dolorum. Magnam repellendus
            quibusdam corporis temporibus numquam sunt atque illum, nihil
            pariatur mollitia aspernatur, distinctio voluptatem!
          </Alert>

          <Alert color="success">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
            architecto nemo explicabo quae animi dolorum. Magnam repellendus
            quibusdam corporis temporibus numquam sunt atque illum, nihil
            pariatur mollitia aspernatur, distinctio voluptatem!
          </Alert>

          <Alert color="danger">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
            architecto nemo explicabo quae animi dolorum. Magnam repellendus
            quibusdam corporis temporibus numquam sunt atque illum, nihil
            pariatur mollitia aspernatur, distinctio voluptatem!
          </Alert>

          <Alert color="warning">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
            architecto nemo explicabo quae animi dolorum. Magnam repellendus
            quibusdam corporis temporibus numquam sunt atque illum, nihil
            pariatur mollitia aspernatur, distinctio voluptatem!
          </Alert>

          <Alert color="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
            architecto nemo explicabo quae animi dolorum. Magnam repellendus
            quibusdam corporis temporibus numquam sunt atque illum, nihil
            pariatur mollitia aspernatur, distinctio voluptatem!
          </Alert>

          <Alert color="grey">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
            architecto nemo explicabo quae animi dolorum. Magnam repellendus
            quibusdam corporis temporibus numquam sunt atque illum, nihil
            pariatur mollitia aspernatur, distinctio voluptatem!
          </Alert>

          <Alert color="dark">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
            architecto nemo explicabo quae animi dolorum. Magnam repellendus
            quibusdam corporis temporibus numquam sunt atque illum, nihil
            pariatur mollitia aspernatur, distinctio voluptatem!
          </Alert>
        </Section>

        <Section
          title="Badge"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          closed
        >
          <Badge label="Badge" size="small" /> <hr />
          <Badge color="success" label="Badge" size="small" />
          <Badge color="danger" label="Badge" size="small" />
          <hr />
          <Badge
            color="danger"
            label="Badge"
            size="small"
            outline
            rounded
            onClick={() => alert('xx')}
            className="deneme"
            style={{ cursor: 'pointer' }}
          />
          <hr />
          <Badge color="warning" label="Badge" size="small" />
          <Badge color="info" label="Badge" size="small" />
          <Badge color="grey" label="Badge" size="small" />
          <Badge color="dark" label="Badge" size="small" rounded />
        </Section>

        <Section
          title="Accordion"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          closed
        >
          <Accordion active="title-2" items={ACCORDION_ITEMS} />
        </Section>

        <Section
          title="Breadcrumb"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          closed
        >
          <Breadcrumb items={BREADCRUMB_ITEMS} />
          <Breadcrumb items={BREADCRUMB_ITEMS_2} />
        </Section>
      </Container>
    </>
  );
};

export default App;
