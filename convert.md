# 英語化変換対象ファイルリスト（詳細版）

このサイトを英語圏向けにリバイスするために、以下のファイルの変換作業が必要です。作業漏れを防ぐため、ディレクトリ配下のファイルをすべてリストアップしています。

## 1. ページとルーティング (最優先)

URL構造、ページタイトル、コンテンツの翻訳が必要です。フランス語・日本語のディレクトリ名は英語に変更する必要があります。

### 1.1. `a-propos` (概要ページ)
| ファイル/ディレクトリ | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `src/app/a-propos/` | ディレクトリ名を `about` に変更 | URL変更 | (完了) |
| `src/app/a-propos/page.tsx` | コンテンツを英語に翻訳 | | (完了) |

### 1.2. `chaines` (チェーン店)
ディレクトリ名を `chains` に変更し、配下のファイル・ディレクトリも英語化が必要です。
| ファイル/ディレクトリ | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `src/app/chaines/layout.tsx` | レイアウト内のテキストを翻訳 | | (完了) |
| `src/app/chaines/metadata.ts` | `title`, `description` を翻訳 | SEO | (完了) |
| `src/app/chaines/page.tsx` | チェーン店一覧ページのコンテンツを翻訳 | | (完了) |
| `src/app/chaines/anan/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/bamiyan/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/big-echo/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/botejyu/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/coco-ichibanya/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/domdom/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/doutor/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/freshness-burger/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/fuji-soba/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/futago/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/ganso-aburado/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/gindako/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/go-go-curry/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/gusto/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/gyoza-no-ohsho/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/gyukaku/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/hama-sushi/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/hanamaru-udon/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/hidakaya/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/hoshino/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/ichiran/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/ikinari-steak/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/ippudo/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/isomaru-suisan/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/jolly-pasta/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/jonathans/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/karaoke-kan/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/komeda/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/komoro-soba/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/kura-sushi/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/kushikatsu-tanaka/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/lotteria/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/marugame-seimen/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/matsuya/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/miyamoto-munashi/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/mos-burger/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/nakau/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/ootoya/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/osaka-ohsho/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/ringer-hut/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/saizeriya/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/shirokiya/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/sukiya/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/sukiya-curry/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/sushiro/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/tenkaippin/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/tenya/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/tokyo-abura-gumi/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/torikizoku/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/tsunahachi/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/watami/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/yayoiken/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/yoshinoya/page.tsx` | コンテンツを英語に翻訳 | | (完了) |
| `src/app/chaines/yudetaro/page.tsx` | コンテンツを英語に翻訳 | | (完了) |

### 1.3. `guides` (ガイド)
ディレクトリ名を `guides` に変更し、配下のフランス語のディレクトリ名も英語化が必要です。
| ファイル/ディレクトリ | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `src/app/guides/page.tsx` | ガイド一覧ページのコンテンツを翻訳 | | (完了) |
| `src/app/guides/articles/...` | ディレクトリ名とコンテンツを翻訳 | 例: `culture-gaishoku-francais` -> `eating-out-culture-in-japan` | (完了) |
| `src/app/guides/boissons-japonaises/...` | ディレクトリ名 `japanese-drinks` に変更、コンテンツを翻訳 | | (完了) |
| `src/app/guides/comment-choisir-restaurant-japonais/...` | ディレクトリ名 `how-to-choose-a-restaurant` に変更、コンテンツを翻訳 | | (完了) |
| `src/app/guides/comment-commander/...` | ディレクトリ名 `how-to-order` に変更、コンテンツを翻訳 | | (完了) |
| `src/app/guides/comprendre-culture-japonaise/...` | ディレクトリ名 `understanding-japanese-culture` に変更、コンテンツを翻訳 | | (完了) |
| `src/app/guides/culture-etiquette/...` | ディレクトリ名 `culture-and-etiquette` に変更、コンテンツを翻訳 | | (完了) |
| `src/app/guides/regimes-alimentaires/...` | ディレクトリ名 `dietary-requirements` に変更、コンテンツを翻訳 | | (完了) |
| `src/app/guides/restaurant-sushi/...` | ディレクトリ名 `sushi-restaurants` に変更、コンテンツを翻訳 | | (完了) |

### 1.4. `type-plat` (料理の種類)
ディレクトリ名を `dish-types` に変更し、配下の日本語・フランス語のディレクトリ名も英語化が必要です。
| ファイル/ディレクトリ | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `src/app/type-plat/page.tsx` | 料理カテゴリ一覧ページのコンテンツを翻訳 | | (完了) |
| `src/app/type-plat/aburasoba/page.tsx` | ディレクトリ名とコンテンツを翻訳 | | (完了) |
| `src/app/type-plat/burgers/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/cafe/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/cuisine-chinoise/page.tsx` | ディレクトリ名 `chinese-cuisine` に変更、コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/curry/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/family-restaurants/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/gyudon/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/izakaya/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/kaiten-zushi/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/karaoke/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/okonomiyaki/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/ramen/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/soba/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/steak/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/street-food/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/teishoku/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/tempura/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/udon/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/udon-soba/page.tsx` | コンテンツを翻訳 | | (完了) |
| `src/app/type-plat/yakiniku/page.tsx` | コンテンツを翻訳 | | (完了) |

### 1.5. その他ページ
| ファイルパス | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `src/app/contact/page.tsx` | フォームや案内文を翻訳 | | ✅ 完了 |
| `src/app/layout.tsx` | ルートレイアウトの `lang` 属性を `fr` から `en` に変更、メタデータを翻訳 | | ✅ 完了 |
| `src/app/page.tsx` | トップページのコンテンツを翻訳 | | ✅ 完了 |
| `src/app/metadata.ts` | `title`, `description` を翻訳 | SEO | ✅ 完了 |
| `src/app/sitemap.ts` | サイトマップ生成ロジック内のURLを更新 | | ✅ 完了 |
| `src/app/robots.ts` | 必要に応じて `robots.txt` の内容を更新 | | ✅ 完了 |

## 2. UIコンポーネント
| ファイルパス | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `src/components/AdSenseUnit.tsx` | 広告関連のテキスト（もしあれば） | | ✅ 完了 |
| `src/components/AnalyticsProvider.tsx` | 変換不要 | | ✅ 完了 |
| `src/components/BottomNavigation.tsx` | ナビゲーションのリンクテキストを翻訳 | | ✅ 完了 |
| `src/components/Breadcrumb.tsx` | パンくずリストのテキストを翻訳 | | ✅ 完了 |
| `src/components/CategoryViewTracker.tsx` | 変換不要 | | ✅ 完了 |
| `src/components/ChainViewTracker.tsx` | 変換不要 | | ✅ 完了 |
| `src/components/CustomLink.tsx` | 変換不要 | | ✅ 完了 |
| `src/components/Footer.tsx` | フッターのテキスト、リンクを翻訳 | | ✅ 完了 |
| `src/components/GoogleAdSense.tsx` | 変換不要 | | ✅ 完了 |
| `src/components/GoogleAnalytics.tsx` | 変換不要 | | ✅ 完了 |
| `src/components/GoogleSiteVerification.tsx` | 変換不要 | | ✅ 完了 |
| `src/components/GuideViewTracker.tsx` | 変換不要 | | ✅ 完了 |
| `src/components/Header.tsx` | ヘッダーのテキスト、リンクを翻訳 | | ✅ 完了 |
| `src/components/MobileCategoryGrid.tsx` | カテゴリ名を翻訳（`site-data.ts` と連動） | | (未着手) |
| `src/components/MobileChainCards.tsx` | チェーン店情報を翻訳（`chain-metadata.ts` と連動） | | (未着手) |
| `src/components/MobileGuidesPreview.tsx` | ガイドのプレビューテキストを翻訳 | | (未着手) |
| `src/components/MobileHeader.tsx` | ヘッダーのテキスト、リンクを翻訳 | | (未着手) |
| `src/components/MobileNavigation.tsx` | ナビゲーションのリンクテキストを翻訳 | | (未着手) |
| `src/components/MobileSearch.tsx` | 検索機能のプレースホルダーなどを翻訳 | | (未着手) |
| `src/components/PageViewTracker.tsx` | 変換不要 | | (完了) |
| `src/components/StructuredData.tsx` | 構造化データ内の文字列を翻訳（`structured-data.ts` と連動） | | (未着手) |
| `src/components/tutorial/...` | チュートリアル関連コンポーネント内のテキストを翻訳 | | (未着手) |

## 3. データとコンテンツ

### 3.1. データファイル
| ファイルパス | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `src/data/site-data.ts` | カテゴリ名、サイトタイトルなどのデータを翻訳 | サイト全体に影響 | (未着手) |
| `src/data/tutorial/badges.ts` | チュートリアルデータを翻訳 | | (未着手) |
| `src/data/tutorial/chains.ts` | チュートリアルデータを翻訳 | | (未着手) |
| `src/data/tutorial/lessons.ts` | チュートリアルデータを翻訳 | | (未着手) |
| `src/data/tutorial/quizzes.ts` | チュートリアルデータを翻訳 | | (未着手) |

### 3.2. ライブラリ/ヘルパー
| ファイルパス | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `src/lib/analytics-events.ts` | イベント名に日本語が含まれていれば翻訳 | | (未着手) |
| `src/lib/chain-count.ts` | 変換不要 | | (完了) |
| `src/lib/chain-metadata.ts` | チェーン店のメタデータ（説明文など）を翻訳 | | (未着手) |
| `src/lib/gtag.ts` | 変換不要 | | (完了) |
| `src/lib/seo.ts` | SEO関連のヘルパー内のデフォルト文字列を翻訳 | | (未着手) |
| `src/lib/structured-data.ts` | 構造化データ内の文字列を翻訳 | | (未着手) |

### 3.3. `document` ディレクトリ
| ファイルパス | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `document/aburasoba.md` | 英語に翻訳 | | (未着手) |
| `document/aburasoba.txt` | 英語に翻訳 | | (未着手) |
| `document/boteju.md` | 英語に翻訳 | | (未着手) |
| `document/boteju.txt` | 英語に翻訳 | | (未着手) |
| `document/futago.md` | 英語に翻訳 | | (未着手) |
| `document/futago.txt` | 英語に翻訳 | | (未着手) |
| `document/isomaru.md` | 英語に翻訳 | | (未着手) |
| `document/isomaru.txt` | 英語に翻訳 | | (未着手) |
| `document/sake.md` | 英語に翻訳 | | (未着手) |
| `document/sake.txt` | 英語に翻訳 | | (未着手) |
| `document/seo.md` | 英語に翻訳 | | (未着手) |
| `document/seo.txt` | 英語に翻訳 | | (未着手) |
| `document/sushiro.md` | 英語に翻訳 | | (未着手) |
| `document/sushiro.txt` | 英語に翻訳 | | (未着手) |
| `document/txtToMd.md` | 変換不要（スクリプト用ドキュメント） | | (完了) |
| `document/yakiniku_add.md` | 英語に翻訳 | | (未着手) |
| `document/yakiniku_add.txt` | 英語に翻訳 | | (未着手) |
| `document/yakiniku.txt` | 英語に翻訳 | | (未着手) |

## 4. ドキュメントと設定ファイル
| ファイルパス | 変換内容 | 備考 | ステータス |
| :--- | :--- | :--- | :--- |
| `README.md` | 英語に更新 | | (未着手) |
| `README-for-fr.md` | 削除または `README.md` に統合 | | (未着手) |
| `generate-metadata.js` | スクリプト内のコメントや文字列を翻訳 | | (未着手) |
| `.github/copilot-instructions.md` | 開発者向けの指示を英語に翻訳 | | (未着手) |
| `next.config.ts` | `i18n` 設定を追加/変更する場合 | 現状は設定なし | (完了) |
| `package.json` | `description` などを英語に更新 | | (未着手) |
