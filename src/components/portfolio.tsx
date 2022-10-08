import dayjs from 'dayjs'
import { Post } from '../types'
import Link from 'next/link'

const PortfolioItem: React.FC<{
  url: string
  title: string
  description: string
  date: string
  image: string
}> = ({ url, title, description, date, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
      <Link href={url} passHref>
        <a className="group w-full md:w-24 lg:w-40 h-32 md:h-24 lg:h-40 block self-start flex-shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img
            src={image}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
          />
        </a>
      </Link>

      <div className="flex flex-col gap-2">
        <span className="text-gray-400 text-sm">{date}</span>

        <h2 className="text-gray-800 text-xl font-bold">
          <Link href={url} passHref>
            <a
              href={url}
              className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              {title}
            </a>
          </Link>
        </h2>

        <p className="text-gray-500">{description}</p>

        <div>
          <Link href={url} passHref>
            <a className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">
              Read more
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const Portfolio: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Portfolio
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            機械系エンジニアですがソフトウェアの勉強中です。
            <br />
            しょぼいですがポートフォリオを作りました。
            <br />
            詳細のプロフィールは
            <a
              href="https://record.jp/chabesu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
            >
              こちら
            </a>
            に書いています。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
          {posts.map((p) => (
            <PortfolioItem
              title={p.page}
              description={p.description}
              date={dayjs(p.date).format('YYYY-MM-DD')}
              image={p.thumbnail}
              url={`/posts/${p.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
