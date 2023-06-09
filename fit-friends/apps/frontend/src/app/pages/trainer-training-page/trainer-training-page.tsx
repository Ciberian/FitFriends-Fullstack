// import { ITraining } from '../../../../../../libs/shared-types/src/lib/training.interface';
import ReviewsList from '../../components/reviews-list/reviews-list';
import SiteHeader from '../../components/site-header/site-header';

function TrainerTrainingPage(): JSX.Element {

  // const {
  //   title,
  //   type,
  //   duration,
  //   gender,
  //   caloriesToLose,
  //   description,
  //   video,
  //   price,
  //   rating,
  //   isSpecialOffer,
  // } = training;

  return (
    <div className="wrapper">
      <SiteHeader />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Карточка тренировки</h1>
              <aside className="reviews-side-bar">
                <button
                  className="btn-flat btn-flat--underlined reviews-side-bar__back"
                  type="button"
                >
                  <svg width="14" height="10" aria-hidden="true">
                    <use xlinkHref="#arrow-left"></use>
                  </svg>
                  <span>Назад</span>
                </button>
                <ReviewsList reviews={[]} isForTrainer setPopupVisible={function (): void {
                  throw new Error('Function not implemented.');
                }} />
              </aside>
              <div className="training-card training-card--edit">
                <div className="training-info">
                  <h2 className="visually-hidden">Информация о тренировке</h2>
                  <div className="training-info__header">
                    <div className="training-info__coach">
                      <div className="training-info__photo">
                        <img
                          src={'AVATAR.JPG'}
                          width="64"
                          height="64"
                          alt="Изображение тренера"
                        />
                      </div>
                      <div className="training-info__coach-info">
                        <span className="training-info__label">Тренер</span>
                        <span className="training-info__name">
                          {'TRAINER NAME'}
                        </span>
                      </div>
                    </div>
                    <button
                      className="btn-flat btn-flat--light training-info__edit training-info__edit--edit"
                      type="button"
                    >
                      <svg width="12" height="12" aria-hidden="true">
                        <use xlinkHref="#icon-edit"></use>
                      </svg>
                      <span>Редактировать</span>
                    </button>
                    <button
                      className="btn-flat btn-flat--light btn-flat--underlined training-info__edit training-info__edit--save"
                      type="button"
                    >
                      <svg width="12" height="12" aria-hidden="true">
                        <use xlinkHref="#icon-edit"></use>
                      </svg>
                      <span>Сохранить</span>
                    </button>
                  </div>
                  {/* <div className="training-info__main-content">
                    <form action="#" method="get">
                      <div className="training-info__form-wrapper">
                        <div className="training-info__info-wrapper">
                          <div className="training-info__input training-info__input--training">
                            <label>
                              <span className="training-info__label">
                                Название тренировки
                              </span>
                              <input
                                type="text"
                                name="training"
                                value={title}
                              />
                            </label>
                            <div className="training-info__error">
                              Обязательное поле
                            </div>
                          </div>
                          <div className="training-info__textarea">
                            <label>
                              <span className="training-info__label">
                                Описание тренировки
                              </span>
                              <textarea name="description">
                                {description}
                              </textarea>
                            </label>
                          </div>
                        </div>
                        <div className="training-info__rating-wrapper">
                          <div className="training-info__input training-info__input--rating">
                            <label>
                              <span className="training-info__label">
                                Рейтинг
                              </span>
                              <span className="training-info__rating-icon">
                                <svg width="18" height="18" aria-hidden="true">
                                  <use xlinkHref="#icon-star"></use>
                                </svg>
                              </span>
                              <input
                                type="number"
                                name="rating"
                                value={rating}
                              />
                            </label>
                          </div>
                          <ul className="training-info__list">
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white">
                                <span>#{type}</span>
                              </div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white">
                                <span>#{gender}</span>
                              </div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white">
                                <span>#{caloriesToLose}ккал</span>
                              </div>
                            </li>
                            <li className="training-info__item">
                              <div className="hashtag hashtag--white">
                                <span>#{duration}</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="training-info__price-wrapper">
                          <div className="training-info__input training-info__input--price">
                            <label>
                              <span className="training-info__label">
                                Стоимость
                              </span>
                              <input
                                type="text"
                                name="price"
                                value={`${price} ₽`}
                              />
                            </label>
                            <div className="training-info__error">
                              Введите число
                            </div>
                          </div>
                          {isSpecialOffer && (
                            <button
                              className="btn-flat btn-flat--light btn-flat--underlined training-info__discount"
                              type="button"
                            >
                              <svg width="14" height="14" aria-hidden="true">
                                <use xlinkHref="#icon-discount"></use>
                              </svg>
                              <span>Сделать скидку 10%</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </form>
                  </div> */}
                </div>
                {/* <div className="training-video">
                  <h2 className="training-video__title">Видео</h2>
                  {video ? (
                    <>
                      <div className="training-video__video">
                        <div className="training-video__thumbnail">
                          <video src={video} controls></video>
                        </div>
                        <button className="training-video__play-button btn-reset">
                          <svg width="18" height="30" aria-hidden="true">
                            <use xlinkHref="#icon-arrow"></use>
                          </svg>
                        </button>
                      </div>
                      <div className="training-video__edit-buttons">
                        <button className="btn" type="button">
                          Сохранить
                        </button>
                        <button className="btn btn--outlined" type="button">
                          Удалить
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="training-video__drop-files">
                      <form action="#" method="post">
                        <div className="training-video__form-wrapper">
                          <div className="drag-and-drop">
                            <label>
                              <span
                                className="drag-and-drop__label"
                                tabIndex={0}
                              >
                                Загрузите сюда файлы формата MOV, AVI или MP4
                                <svg width="20" height="20" aria-hidden="true">
                                  <use xlinkHref="#icon-import-video"></use>
                                </svg>
                              </span>
                              <input
                                type="file"
                                name="import"
                                tabIndex={-1}
                                accept=".mov, .avi, .mp4"
                              />
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TrainerTrainingPage;
