var INFOBLOG = 
{
        Variant1: "mark mark-active",
        Variant2: "mark" ,
        Variant3: "mark" ,
        Switch1: "switchActiv",
        Switch2: "",
        Switch3: "",
        Index: 0,
        ton: 0,
        hiden: "hiden img1",
        images: [
            ['img/Т512.png','img/Т513.png','img/Т514.png'],
            ['img/D512.png','img/D513.png','img/D514.png'],
            ['img/H512.png','img/H513.png','img/H514.png']
            ],
        information: "information in1",
}

class Slider extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        Infoblog: INFOBLOG,
      };
    }
    clickSwitch(el){
       console.log(el.target.id);
      if(el.target.id == "sw1"){
          this.state.Infoblog.Switch1 = "switchActiv";
          this.state.Infoblog.Switch2 = "";
          this.state.Infoblog.Switch3 = "";
          this.state.Infoblog.Index = 0;
          this.state.Infoblog.hiden = "hiden img1";
      } else if (el.target.id == "sw2"){
          this.state.Infoblog.Switch1 = "";
          this.state.Infoblog.Switch2 = "switchActiv";
          this.state.Infoblog.Switch3 = "";
          this.state.Infoblog.Index = 1;
          this.state.Infoblog.hiden = "hiden img2";
      } else if (el.target.id == "sw3"){
          this.state.Infoblog.Switch1 = "";
          this.state.Infoblog.Switch2 = "";
          this.state.Infoblog.Switch3 = "switchActiv";
          this.state.Infoblog.Index = 2;
          this.state.Infoblog.hiden = "hiden img3";
      }
      INFOBLOG = this.state.Infoblog;
      this.setState({
                 Infoblog: INFOBLOG
              });
    }
    // className={this.state.Infoblog.Img}
    render(){
        return(
            <div className="slider">
            <div className={this.state.Infoblog.hiden}>
              <img className="img" src={this.state.Infoblog.images[this.state.Infoblog.ton][0]} alt=""/>
              <img className="img" src={this.state.Infoblog.images[this.state.Infoblog.ton][1]} alt=""/>
              <img className="img" src={this.state.Infoblog.images[this.state.Infoblog.ton][2]} alt=""/>
            </div>
              <div className="switch">
                <div id="sw1" className={this.state.Infoblog.Switch1} flag='zopa' onClick={this.clickSwitch.bind(this)}></div>
                <div id="sw2" className={this.state.Infoblog.Switch2} onClick={this.clickSwitch.bind(this)}></div>
                <div id="sw3" className={this.state.Infoblog.Switch3} onClick={this.clickSwitch.bind(this)}></div>
              </div>
            </div>
        )
    }
};

class Content extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        Infoblog: INFOBLOG,
      };
    }

    active(el) {
      if(el.target.innerText == "Теплый"){
          this.state.Infoblog.Variant1 = "mark mark-active";
          this.state.Infoblog.Variant2 = "mark";
          this.state.Infoblog.Variant3 = "mark";
          this.state.Infoblog.ton = 0;
      } else if (el.target.innerText == "Дневной"){
          this.state.Infoblog.Variant1 = "mark";
          this.state.Infoblog.Variant2 = "mark mark-active";
          this.state.Infoblog.Variant3 = "mark";
          this.state.Infoblog.ton = 1;
      } else if (el.target.innerText == "Холодный"){
          this.state.Infoblog.Variant1 = "mark";
          this.state.Infoblog.Variant2 = "mark";
          this.state.Infoblog.Variant3 = "mark mark-active";
          this.state.Infoblog.ton = 2;
      }
      INFOBLOG = this.state.Infoblog;
      this.setState({
                 Infoblog: INFOBLOG
              });
    }

    openClose(){
      if (this.state.Infoblog.information == "information in1") {
        this.state.Infoblog.information = "information in2";
      } else if (this.state.Infoblog.information == "information in2"){
        this.state.Infoblog.information = "information in1";
      }
      INFOBLOG = this.state.Infoblog;
      this.setState({
                 Infoblog: INFOBLOG
              });
    }

    render(){
        return(
          <div className="paramertrs">
          <Slider/>
          <div className="description">
        <div className="properties">
          <ul>
            <li>Класс:</li>
            <li>Потребляемая мощность:</li>
            <li>Сила света:</li>
            <li>Гарантия:</li>
            <li>Монтаж:</li>
            <li>Итого сумма:</li>
          </ul>
          <ul>
            <li>Standart</li>
            <li>59 Вт.</li>
            <li>3459 Люмен = 7,5 ламп накаливания по 40 Вт.</li>
            <li>3 года</li>
            <li>Да</li>
            <li>2594 рублей</li>
          </ul>
        </div>
        <div className="info">
          <div className="infoI" onClick={this.openClose.bind(this)} ><p>i</p></div>
          <p>Выберите цвет свечения</p>
        </div>
          <div className="variants">
              <div className="variant" onClick={this.active.bind(this)}>
                <div className="variantName">Теплый</div>
                <div className={this.state.Infoblog.Variant1} > </div>
              </div>

              <div className="variant" onClick={this.active.bind(this)}>
                <div className="variantName">Дневной</div>
                <div className={this.state.Infoblog.Variant2} > </div>
              </div>

              <div className="variant" onClick={this.active.bind(this)}>
                <div className="variantName">Холодный</div>
                <div className={this.state.Infoblog.Variant3} > </div>
              </div>
            </div>
      </div>
          <div className={this.state.Infoblog.information}>
            <div className="text">
              <div className="back" onClick={this.openClose.bind(this)}> &lsaquo;  вернуться</div>
              <p>Стиль casual (кэжуал, в пер. с англ. - небрежный, случайный, повседневный) - это неформальный, свободный и динамичный стиль в современном дизайне интерьера.</p>
              <p>Такие интерьеры действуют расслабляюще, благодаря атмосфере уюта и комфорта, и настраивают на неформальный лад. Casual в интерьере — образец свободы, удобства, непосредственности и универсальности. Основными принципами стиля casual являются демократичность, раскованность, отсутствие ограничений и лишнего блеска, возможность сочетать несочетаемое. Интерьер в стиле casual не подразумевает следование каким-то общепринятым канонам. Практичная легкость стиля casual уже давно популярна у тех людей, кому нравится комфорт одновременно со стилем. Небрежная красота интерьеров типовых городских квартир с легким налетом роскоши, именно таким представляется дизайн интерьера в модном сегодня стиле.</p>
              <p>В стиле casual чаще всего оформляют гостиные, которые выглядят изыскано и красиво. Здесь нет места бессмысленным украшательствам, нет места гламуру – только практичный дизайн и стильные плавные линии. В данном стиле все предметы интерьера являются многофункциональными и имеют свой смысл. Сдержанные и практичные формы, повседневность и простота должны быть воплощены в высоком качестве.</p>
            </div>
          </div>
      </div>
        )
    }
};

ReactDOM.render(<Content/>, document.getElementById('content'))

    class Menu extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            className:"list-menu in1",
            src: "img/menu.png",
        };
        }
        active(el){
          if (el.target.src=="http://fology/img/menu.png"){
            this.setState({
                 className:"list-menu in2",
                 src: "img/iconfinder_cancel.png",
              });
          } else if (el.target.src=="http://fology/img/iconfinder_cancel.png"){
            this.setState({
                 className:"list-menu in1",
                 src: "img/menu.png",
              });
          }

        }
        render(){
            return(
              <div>
                <img className="img-menu" src={this.state.src} alt="" onClick={this.active.bind(this)}/>
                <div className={this.state.className}>
                  <div className="list-menu-item"><p>Обучающее видео</p></div>
                  <div className="list-menu-item"><p>Оформление заказа</p></div>
                  <div className="list-menu-item"><p>Оплата</p></div>
                  <div className="list-menu-item"><p>Доставка</p></div>
                  <div className="list-menu-item"><p>Гарантия</p></div>
                  <div className="list-menu-item"><p>Возврат</p></div>
                  <div className="list-menu-item"><p>Контакты</p></div>
                  <div className="list-menu-item"><p>Партнерам</p></div>
                </div>
              </div>

            )
        }
    };

ReactDOM.render(<Menu/>, document.getElementById('menu'))




          // <div class="variant">
          //   <div class="variantName">Теплый</div>
          //   <div class="mark mark-active"> </div>
          // </div>
          // <div class="variant">
          //   <div class="variantName">Дневной</div>
          //   <div class="mark"> </div>
          // </div>
          // <div class="variant">
          //   <div class="variantName">Холодный</div>
          //   <div class="mark"> </div>
          // </div>


          //           <div className="variant">
          //   <div className="variantName">Дневной</div>
          //   <div className={this.state.Variant2} onClick={this.active.bind(this)}> </div>
          // </div>

//           class Variant extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//         Variant1: "mark mark-active",
//         Variant2: "mark" ,
//         Variant3: "mark" ,
//         dd: "asdasd"
//         // var1: "1",
//     };
//     // console.log(this.props.value);
//      // alert(this.props.value);
//   }
//     text(el){
//       console.log(el.target);

//       // alert(value);
//     }
//     render(){
//         return(
//           <div>
//           <div className="variant" valb={this.props.value} onClick={this.text.bind(this)}>
//             <div className="variantName">Теплый</div>
//             <div className={this.state.Variant1}> </div>
//           </div></div>
//         )
//     }
// };



// class Variants extends React.Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         Infoblog: INFOBLOG,
//       };
//     }

//     active(el) {
//       if(el.target.innerText == "Теплый"){
//           this.state.Infoblog.Variant1 = "mark mark-active";
//           this.state.Infoblog.Variant2 = "mark";
//           this.state.Infoblog.Variant3 = "mark";
//           this.state.Infoblog.Img = "img imgT";
//       } else if (el.target.innerText == "Дневной"){
//           this.state.Infoblog.Variant1 = "mark";
//           this.state.Infoblog.Variant2 = "mark mark-active";
//           this.state.Infoblog.Variant3 = "mark";
//           this.state.Infoblog.Img = "img imgD";
//       } else if (el.target.innerText == "Холодный"){
//           this.state.Infoblog.Variant1 = "mark";
//           this.state.Infoblog.Variant2 = "mark";
//           this.state.Infoblog.Variant3 = "mark mark-active";
//           this.state.Infoblog.Img = "img imgH";
//       }
//       INFOBLOG = this.state.Infoblog;
//       this.setState({
//                  Infoblog: INFOBLOG
//               });
//       console.log(INFOBLOG);
//     }

//     render(){
//         return(
//           <div className="variants">
//             <div className="variant" onClick={this.active.bind(this)}>
//               <div className="variantName">Теплый</div>
//               <div className={this.state.Infoblog.Variant1} > </div>
//             </div>

//             <div className="variant" onClick={this.active.bind(this)}>
//               <div className="variantName">Дневной</div>
//               <div className={this.state.Infoblog.Variant2} > </div>
//             </div>

//             <div className="variant" onClick={this.active.bind(this)}>
//               <div className="variantName">Холодный</div>
//               <div className={this.state.Infoblog.Variant3} > </div>
//             </div>
//           </div>
//         )
//     }
// };

// ReactDOM.render(<Variants/>, document.getElementById('variants'))