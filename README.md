# Практикум по цифровым сервисам Актион

Пять учебных ситуаций для администратора обучения: приглашения, назначение программ, сверка данных через личный кабинет, электронный протокол и Монитор ЦОТ.

[Открыть тренажер](https://fatco321.github.io/tripteh-training/)

В репозитории размещена готовая статическая сборка. Все рабочие действия эмулируются в браузере: реальных писем, скачиваний и подписания документов нет. Прогресс сохраняется при переходе между задачами и полностью сбрасывается при обновлении страницы.

## Встраивание

```html
<iframe
  id="tripteh-practice"
  src="https://fatco321.github.io/tripteh-training/"
  title="Практикум по цифровым сервисам Актион"
  style="width:100%;height:750px;border:0"
></iframe>
```

В тренажере подключена дочерняя часть iframeResizer 4.3.11. Если платформа уроков уже использует iframeResizer, достаточно указать адрес тренажера. Высота автоматически увеличивается и уменьшается вместе с содержимым.

Для самостоятельной родительской страницы после iframe:

```html
<script src="https://fatco321.github.io/tripteh-training/vendor/iframeResizer.min.js"></script>
<script>
  iFrameResize({ checkOrigin: ['https://fatco321.github.io'] }, '#tripteh-practice');
</script>
```

Прежние сообщения `tripteh:resize` сохранены для совместимости. iframeResizer включен локальными файлами, без CDN; лицензия MIT находится в `vendor/LICENSE-iframe-resizer.txt`.

Сторонние лицензии: `THIRD-PARTY-NOTICES.txt`, `ANATOMY-LICENSE.txt`.
