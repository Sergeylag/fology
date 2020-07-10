    var KitContents = React.createClass({
      getInitialState: function(){
        return {
          position1: 'Светильник по вашему размеру - 2 шт',
          position2: 'Блок питания 100 Вт. - 1 шт',
          position3: 'Крепления - саморезы каждые 30 см',
          position4: 'Комментарий: Можно мне гаечный ключ вместо отвертки',
          position5: 'Конфигурация светильника (вариант 2): scheme',
        };
      },
      render: function(){
        return(
                  <div className="text-info">
                     <h3>Состав комплекта:</h3>
                     <p>{this.state.position1}</p>
                     <p>{this.state.position2}</p>
                     <p>{this.state.position3}</p>
                     <p>{this.state.position4}</p>
                     <p>{this.state.position5}</p>
                  </div>
          );
      }
    });

    var Specifications = React.createClass({
      getInitialState: function(){
        return {
          position1: 'Длина 1-го светильника (L1): 1375 мм',
          position2: 'Длина 2-го светильника (L2): 2110 мм',
          position3: 'Вид профиля: Накладной профиль с молочным рассеивателем',
          position4: 'Лента: Светодиодная лента 24V SMD 2835 140LED/m 18W IP33 Day White LUX CRI 90',
          position5: 'Суммарная потребляемая мощность: 63 Вт',
          position6: 'Вывод питающего кабеля из светильника: через заглушку',
          position7: 'Стык светильников: под углом 45 градусов',
          position8: 'Длина кабеля до блока питания (Lcb): 240 см',
        };
      },
      render: function(){
        return(
                  <div className="text-info">
                     <h3>Технические характеристики:</h3>
                     <p>{this.state.position1}</p>
                     <p>{this.state.position2}</p>
                     <p>{this.state.position3}</p>
                     <p>{this.state.position4}</p>
                     <p>{this.state.position5}</p>
                     <p>{this.state.position6}</p>
                     <p>{this.state.position7}</p>
                     <p>{this.state.position8}</p>
                  </div>
          );
      }
    });

    var TextHolder = React.createClass({
        getInitialState: function(){
          return {
              orderNumber: '№ T-RP/00129',
              name: 'Покупатель',
              lastName: 'Покупаателевич',
              email: 'amozik@yandex.ru',
              address: '115487, г Москва, ул Садовая Б., д 45',
              phoneNumber: '+7 902 266-44-63',
              executor: 'Группа компаний Fulogy',
              manager: 'Широков Евгений',
              phoneManager: '+7(499)116-34-00',
              mounting: 'Да',
              toPay: '14 000 руб'
          };
        },

        render: function(){
          return(
                <div className="order-block">

                  <div className="text-holder">
                     <h2>Здравствуйте, {this.state.name} {this.state.lastName}</h2>
                     <p>Ваш заказ {this.state.orderNumber} оформлен</p>
                     <p>Спасибо, что выбрали нас! В ближайшее время с Вами свяжется менеджер для подтверждения заказа.</p>
                  </div>

                  <div className="text-info">
                     <h3>Информация о заказе:</h3>
                     <p>Заказчик: {this.state.name} {this.state.lastName}</p>
                      <p>Email: {this.state.email}</p>
                      <p>Адрес: {this.state.address}</p>
                      <p>Телефон: {this.state.phoneNumber}</p>
                      <p>Исполнитель: {this.state.executor}</p>
                      <p>Менеджер: {this.state.manager}</p>
                      <p>Телефон: {this.state.phoneManager}</p>
                      <p>Монтаж: {this.state.mounting}</p>
                  </div>
                  <KitContents/>
                  <Specifications/>
                  <h3>ИТОГО: {this.state.toPay}</h3>

                </div>
            );
        }
    });

    ReactDOM.render(
      <TextHolder/>,
      document.getElementById("wrapper")
      );
