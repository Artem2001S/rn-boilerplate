# rn-boilerplate

Темплейт для React Native, v72
Ветки:

1. **main** - базовый темплейт с самыми необходимыми библиотеками и конфигом дев/прод
2. **with-firebase** - добавлен firebase (базовый package)
3. **with-expo-modules** - добавлены expo модули
4. **with-expo-and-firebase** - добавлены expo модули и firebase

## Создание проекта

Базовый темплейт:
`npx react-native init SampleApp --template https://github.com/Artem2001S/rn-boilerplate.git`

Для создания проекта из другой ветки необходимо добавить название ветки, например:
`npx react-native init SampleAppWFirebase --template https://github.com/Artem2001S/rn-boilerplate.git#with-firebase`

## Запуск проекта, типы сборок (prod/dev)

ENV константы хранятся в файлах `.env.development` и `.env.production`

В файл `.env` при запуске iOS записываются константы из файла `.env.development` или `.env.production` - в зависимости от выбранной схемы запуска.

#### Запуск iOS

```
$ yarn // установка npm пакетов
$ cd ios && pod install && cd .. // установка pods (для iOS)
```

Открыть проект в XCode (Открыть XCode -> Open a project or file -> Выбрать папку ios проекта)

Выбрать [схему](https://monosnap.com/file/CX524Ouk5jfzW9zuORvD2ZY6YgqWYp) для запуска и эмулятор/устройство, кликнуть на кнопку запуска (слева от схемы).

#### iOS проект содержит 3 схемы для запуска

- `AppName` - дефолтная схема, если потребуется создать новую схему - необходимо склонировать эту схему и таргет `AppName`

- `AppNameDev` - схема для запуска dev версии.

Конфигурация dev приложения находится в файле `DevInfo.plist`, таргет `AppNameDev`

- `AppNameProd` - схема для запуска prod версии.

Конфигурация prod приложения находится в файле `ProdInfo.plist`, таргет `AppNameProd`

Отличия prod и dev схем:

- разные `.env` файлы (перед запуском проекта выполняется скрипт, который записывает в файл `.env` данные из `.env.development` или `.env.production`

- разные .plist файлы
- разные конфигурационные файлы для firebase

> Важно: при изменении .plist файлов (например: добавление доступа к камере) - необходимо внести изменения во все .plist файлы - `DevelopmentInfo.plist`, `ProductionInfo.plist` и `Info.plist`

#### Запуск Android

```
$ yarn // установка npm пакетов
```

Проект содержит следующие скрипты для запуска Android:

- `android:dev` - запуск dev версии, `.env` константы будут использоваться из `.env.development`

- `android:production` - запуск production версии, `.env` константы будут использоваться из `.env.production`

- `android:build:dev` - сборка apk установщика, файл будет сгенерирован в папке `android/app/build/outputs/apk/development/release/app-development-release.apk`

- `android:build:production` - сборка apk установщика, файл будет сгенерирован в папке `android/app/build/outputs/apk/production/release/app-production-release.apk`
- build:dev:aab / build:prod:aab - сборка бандла для загрузки в play market

#### Изменение конфигурации Android приложения

В файле `android/app/build.gradle` описаны параметры сборки приложения.

Настройки названия и id приложения находятся в секции `productFlavors`, который содержит две конфигурации (production & development)

Чтобы изменить id приложения, необходимо изменить параметр `applicationId`.

Для изменения названия приложения, необходимо изменить параметр

`resValue "string", "app_name", "AppName Production"`

> Параметр `app_name` подставляется в `AndroidManifest.xml` > `android:label="@string/app_name"`

### Firebase

В ветках с добавленным Firebase выполнена изначальная настройка firebase. Конфиг для android находится в файлах android/app/src/[production|development]/google-services.json, данный конфиг необходимо изменить на корректный.

## Сборка проекта для выгрузки в Google Play Console / TestFlight

### Подготовка

#### Android

Необходимо сгенерировать ключ подписи приложения.
Ключ лежит в .gitignore, следует сохранить ключ в надежном месте, чтобы не потерять.
[Подробная инструкция по генерации ключа](https://reactnative.dev/docs/signed-apk-android)

#### iOS

[Документация Apple](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution)

Необходимо добавить в XCode аккаунт разработчика, создать и скачать сертификаты Development и Distribution (через App Store Connect).

Выставить `Bundle Identifier` (раздел `General` из настроек выбранного таргета в XCode), который был указан при создании приложения в App Store Connect

### Сборка

#### iOS

1. Выбрать нужную схему (прод/тест)
2. Перед каждой новой сборкой необходимо изменить `Build Number` (раздел `General` из настроек выбранного таргета в XCode)
   Например, если номер текущей сборки 12, то следует изменить номер сборки на 13.
3. Выбрать устройство для сборки `"Any iOS Device"` из списка эмуляторов)
4. Выбрать в меню XCode `Product -> Archive`
5. Далее загружаем созданный [билд по инструкции](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)

#### Android

1. Изменить номер сборки и версию (файл `android/app/build.gradle`)
2. Открыть проект в Android Studio
3. Выбрать в меню Build -> Generate Signed Bundle / APK
4. В появившемся окне выбрать "Android App Bundle"
5. Выбрать сгенерированный ключ подписи, заполнить поля (пароль, alias и тп), нажать далее
6. Выбрать нужный тип сборки
7. Файл формата .aab можно загружать в Google Play Console
