import { useAppDispatch } from 'apps/frontend/src/hooks';
import { registerTrainerAction } from 'apps/frontend/src/store/api-actions';
import { FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

function QuestionnaireTrainerPage(): JSX.Element {
  const [certificateNames, setCertificateNames] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const prevFormData = location.state.firstForm;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.target as HTMLFormElement);

    const data: { [K in string]: unknown } = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    const totalData = { ...data, ...prevFormData };
    dispatch(registerTrainerAction(totalData));
  };

  const handleFileInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const fullPath = evt.target.value;
    if (fullPath) {
      const startIndex =
        fullPath.indexOf('\\') >= 0
          ? fullPath.lastIndexOf('\\')
          : fullPath.lastIndexOf('/');

      let filename = fullPath.substring(startIndex);

      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
      }

      const certificates = [...certificateNames, filename];
      setCertificateNames(certificates);
    }
  };

  return (
    <div className="wrapper">
      <main>
        <div className="background-logo">
          <svg
            className="background-logo__logo"
            width="750"
            height="284"
            aria-hidden="true"
          >
            <use xlinkHref="#logo-big"></use>
          </svg>
          <svg
            className="background-logo__icon"
            width="343"
            height="343"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-logotype"></use>
          </svg>
        </div>
        <div className="popup-form popup-form--questionnaire-coach">
          <div className="popup-form__wrapper">
            <div className="popup-form__content">
              <div className="popup-form__form">
                <form method="get" onSubmit={handleSubmit}>
                  <div className="questionnaire-coach">
                    <h1 className="visually-hidden">Опросник</h1>
                    <div className="questionnaire-coach__wrapper">
                      <div className="questionnaire-coach__block">
                        <span className="questionnaire-coach__legend">
                          Ваша специализация (тип) тренировок
                        </span>
                        <div className="specialization-checkbox questionnaire-coach__specializations">
                          <div className="btn-checkbox">
                            <label>
                              <input
                                className="visually-hidden"
                                type="checkbox"
                                name="specialisation"
                                value="yoga"
                              />
                              <span className="btn-checkbox__btn">Йога</span>
                            </label>
                          </div>
                          <div className="btn-checkbox">
                            <label>
                              <input
                                className="visually-hidden"
                                type="checkbox"
                                name="specialisation"
                                value="running"
                              />
                              <span className="btn-checkbox__btn">Бег</span>
                            </label>
                          </div>
                          <div className="btn-checkbox">
                            <label>
                              <input
                                className="visually-hidden"
                                type="checkbox"
                                name="specialisation"
                                value="power"
                                defaultChecked
                              />
                              <span className="btn-checkbox__btn">Силовые</span>
                            </label>
                          </div>
                          <div className="btn-checkbox">
                            <label>
                              <input
                                className="visually-hidden"
                                type="checkbox"
                                name="specialisation"
                                value="aerobics"
                              />
                              <span className="btn-checkbox__btn">
                                Аэробика
                              </span>
                            </label>
                          </div>
                          <div className="btn-checkbox">
                            <label>
                              <input
                                className="visually-hidden"
                                type="checkbox"
                                name="specialisation"
                                value="crossfit"
                                defaultChecked
                              />
                              <span className="btn-checkbox__btn">
                                Кроссфит
                              </span>
                            </label>
                          </div>
                          <div className="btn-checkbox">
                            <label>
                              <input
                                className="visually-hidden"
                                type="checkbox"
                                name="specialisation"
                                value="boxing"
                                defaultChecked
                              />
                              <span className="btn-checkbox__btn">Бокс</span>
                            </label>
                          </div>
                          <div className="btn-checkbox">
                            <label>
                              <input
                                className="visually-hidden"
                                type="checkbox"
                                name="specialisation"
                                value="pilates"
                              />
                              <span className="btn-checkbox__btn">Пилатес</span>
                            </label>
                          </div>
                          <div className="btn-checkbox">
                            <label>
                              <input
                                className="visually-hidden"
                                type="checkbox"
                                name="specialisation"
                                value="stretching"
                              />
                              <span className="btn-checkbox__btn">
                                Стрейчинг
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="questionnaire-coach__block">
                        <span className="questionnaire-coach__legend">
                          Ваш уровень
                        </span>
                        <div className="custom-toggle-radio custom-toggle-radio--big questionnaire-coach__radio">
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="level" />
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">
                                Новичок
                              </span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="level" defaultChecked />
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">
                                Любитель
                              </span>
                            </label>
                          </div>
                          <div className="custom-toggle-radio__block">
                            <label>
                              <input type="radio" name="level" />
                              <span className="custom-toggle-radio__icon"></span>
                              <span className="custom-toggle-radio__label">
                                Профессионал
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="questionnaire-coach__block">
                        <span className="questionnaire-coach__legend">
                          Ваши дипломы и сертификаты
                        </span>
                        <div className="drag-and-drop questionnaire-coach__drag-and-drop">
                          <label>
                            <span className="drag-and-drop__label" tabIndex={0}>
                              {certificateNames.length
                                ? certificateNames.join(', ')
                                : 'Загрузите сюда файлы формата PDF, JPG или PNG'}
                              <svg width="20" height="20" aria-hidden="true">
                                <use xlinkHref="#icon-import"></use>
                              </svg>
                            </span>
                            <input
                              onChange={handleFileInputChange}
                              type="file"
                              name="certificates"
                              tabIndex={-1}
                              accept=".pdf, .jpg, .png"
                              multiple
                              required
                            />
                          </label>
                        </div>
                      </div>
                      <div className="questionnaire-coach__block">
                        <span className="questionnaire-coach__legend">
                          Расскажите о своём опыте, который мы сможем проверить
                        </span>
                        <div className="custom-textarea questionnaire-coach__textarea">
                          <label>
                            <textarea
                              name="description"
                              placeholder=" "
                            ></textarea>
                          </label>
                        </div>
                        <div className="questionnaire-coach__checkbox">
                          <label>
                            <input
                              type="checkbox"
                              value="individual-training"
                              name="individual-training"
                              defaultChecked
                            />
                            <span className="questionnaire-coach__checkbox-icon">
                              <svg width="9" height="6" aria-hidden="true">
                                <use xlinkHref="#arrow-check"></use>
                              </svg>
                            </span>
                            <span className="questionnaire-coach__checkbox-label">
                              Хочу дополнительно индивидуально тренировать
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn questionnaire-coach__button"
                      type="submit"
                    >
                      Продолжить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default QuestionnaireTrainerPage;
