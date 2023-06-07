import React from "react";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Squash as Hamburger } from "hamburger-react";

export default function MyApp() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      const newIsTop = window.scrollY < 10;
      if (newIsTop !== isTop) {
        setIsTop(newIsTop);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isTop]);

  const toggleDrawer =
    (open: boolean | ((prevState: boolean) => boolean)) => (event: any) => {
      setIsOpen(open);
    };

  return (
    <>
      <header
        className={`${
          isTop ? "" : "opacity-0 -translate-y-5"
        } flex p-6 bg-black text-white items-center transition-all duration-500 ease-in-out`}
      >
        <div className="mr-10 md:hidden">
          <button
            onClick={toggleDrawer((open: boolean) => !open)}
            style={{ position: "relative", zIndex: 1301 }}
          >
            <Hamburger
              toggled={isOpen}
              color={isOpen ? "black" : "white"}
              size={20}
            />
          </button>
          <Drawer open={isOpen} onClose={toggleDrawer(false)}>
            <div className="flex-col space-y-10 mx-8 text-center my-auto">
              <div>
                <Link href="hello">HOME</Link>
              </div>
              <div>
                <Link href="hello">WORK</Link>
              </div>
              <div>
                <Link href="hello">ABOUT</Link>
              </div>
              <div>
                <Link href="hello">CONTACT</Link>
              </div>
            </div>
          </Drawer>
        </div>

        <Link href="hello" className="font-medium text-lg">
          NUTCHA ROMYANONT
        </Link>
        <div className="hidden md:block space-x-4 ml-auto text-sm">
          <Link href="hello">WORK</Link>
          <Link href="hello">ABOUT ME</Link>
          <Link href="hello">CONTACT ME</Link>
        </div>
      </header>
      <p className="text-white"></p>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam metus
        urna, interdum at tristique eu, commodo non odio. Sed massa lacus,
        viverra suscipit porta eget, condimentum id augue. Quisque dignissim
        sodales aliquet. In aliquet pretium posuere. Pellentesque iaculis lacus
        vitae dui tincidunt rutrum. Sed ut euismod turpis. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Mauris nec risus leo. Integer mattis sit amet nisl non porta. Donec
        malesuada pretium pellentesque. Vestibulum fermentum bibendum hendrerit.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Fusce eu nisl at felis ultrices volutpat tristique quis
        odio. Nunc malesuada tortor tellus, at hendrerit libero maximus
        sagittis. Aenean sit amet tellus dictum, tempus massa et, interdum
        purus. Nullam tincidunt massa nec faucibus tempor. Nulla facilisi.
        Nullam vehicula velit nisl, sit amet varius risus iaculis vitae. Fusce
        nulla nisl, blandit non risus at, rhoncus interdum quam. Nam eu leo
        varius, aliquet lacus vitae, interdum mauris. Donec eget neque nec metus
        pulvinar dapibus. Duis pharetra laoreet mi euismod volutpat. Quisque
        mollis enim vel iaculis elementum. Fusce fermentum, ipsum vel commodo
        dapibus, libero diam porttitor nisi, a mattis odio lorem vel justo.
        Praesent viverra, enim nec congue porttitor, justo urna ornare mauris,
        non ultricies quam leo vitae purus. Nunc pellentesque, felis sed
        ultricies feugiat, diam metus ullamcorper tortor, non gravida sapien
        sapien non purus. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Phasellus eget diam tincidunt, bibendum turpis non, lobortis
        lacus. In ac dolor ac dolor efficitur tincidunt. Nulla efficitur neque
        vitae tortor sagittis, eu condimentum odio venenatis. Ut ut imperdiet
        ante. In luctus leo eu ex dictum gravida. Nulla facilisi. Nam tincidunt
        mi ut nisi efficitur molestie. Morbi tristique venenatis finibus.
        Pellentesque ullamcorper enim vel sapien fermentum varius. Cras urna
        leo, scelerisque vel dignissim tincidunt, faucibus vitae dui. Mauris
        quis dui id turpis maximus eleifend. Quisque ex turpis, congue et
        vehicula quis, pharetra eget urna. In fringilla justo eleifend velit
        dictum lacinia. Ut purus nisi, tempor non ultrices et, tincidunt vel
        lacus. Nulla pulvinar nec velit nec commodo. In lorem neque, hendrerit
        eu est at, bibendum rutrum eros. Nullam pellentesque sed ex id
        malesuada. Pellentesque congue nulla in orci porta, non sodales eros
        porttitor. Proin interdum, ex vel sagittis fermentum, elit mauris
        consectetur lorem, in viverra nisi arcu vitae dui. Aenean ex ligula,
        volutpat non nisi a, congue volutpat risus. Aenean elementum varius nisi
        a laoreet. Duis leo odio, malesuada sit amet pulvinar vel, varius at
        metus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nulla vehicula lectus at felis faucibus lobortis. Vivamus posuere, nisl
        at euismod dapibus, lectus lacus lobortis nulla, sit amet eleifend dolor
        sem nec metus. Suspendisse in felis magna. Pellentesque vel turpis vitae
        dolor malesuada congue. Proin id eleifend lacus. Proin aliquet mauris et
        mollis molestie. Praesent velit massa, laoreet elementum aliquam non,
        pharetra eget ligula. Proin consectetur porta orci ac tempus. Integer
        commodo gravida interdum. Vivamus a varius ante. Aenean molestie id
        purus vel gravida. Nullam id dui sollicitudin, rutrum sem vitae,
        molestie ipsum. Curabitur aliquam tellus sit amet malesuada fringilla.
        Praesent luctus magna vitae ultrices porttitor. Duis a nulla ut nisl
        ullamcorper interdum. Etiam efficitur neque neque, non eleifend ante
        ullamcorper eget. Phasellus lobortis ultrices leo sed sodales. Proin
        mollis odio purus, at dictum sapien rhoncus sed. Quisque dictum aliquam
        commodo. Nunc euismod ornare aliquet. Vestibulum sed nisi ac leo
        volutpat venenatis quis sit amet nisl. Nam varius, dolor sed volutpat
        ultricies, augue nisi volutpat augue, et lacinia nulla neque a quam. Sed
        tincidunt tempor ligula id tincidunt. Vivamus eget massa odio. Quisque
        condimentum in nulla ut aliquet. Vivamus dapibus sollicitudin nibh et
        eleifend. Praesent consectetur nulla ut leo pretium lacinia. Maecenas
        ultricies purus id justo placerat, nec tincidunt enim ultricies. Proin
        vitae elit in neque fermentum faucibus at vitae mauris. Duis molestie,
        velit eget fringilla bibendum, massa nulla malesuada dui, non interdum
        arcu neque a elit. Fusce facilisis pulvinar turpis, vitae porta lorem
        elementum non. Duis semper, urna eu aliquam elementum, eros sapien
        lacinia nulla, at interdum nibh felis non leo. Duis sed suscipit felis,
        pellentesque tempor nunc. Suspendisse sed pellentesque augue,
        ullamcorper elementum sapien. Mauris non egestas metus. Sed leo leo,
        sodales vitae erat quis, finibus consectetur leo. Quisque ipsum ante,
        aliquet eu scelerisque nec, suscipit eget elit. Aliquam erat volutpat.
        Donec tempus arcu eu lorem tincidunt, vel imperdiet arcu aliquam.
        Suspendisse blandit sem eget porttitor aliquam. Donec consequat sem ut
        luctus feugiat. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Aliquam tortor magna, convallis
        sed ultricies non, feugiat eu lorem. Cras euismod congue lacus non
        dignissim. Aliquam in semper purus. Proin placerat neque vitae congue
        aliquet. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Maecenas cursus elit vitae arcu porttitor, id
        luctus odio pulvinar. Phasellus tincidunt sem quis efficitur porttitor.
        Maecenas sodales volutpat mauris in pellentesque. Phasellus rhoncus,
        tortor et tincidunt mollis, erat ligula posuere mi, eget facilisis dui
        turpis sit amet erat. Pellentesque tincidunt ullamcorper sem, sed
        interdum risus viverra non. Sed
      </p>
    </>
  );
}
