import React, { FC, ReactElement, useEffect, useState, Fragment } from 'react';

import Contents from './components/Contents';

import { TAllData, TProduct, TProductBody } from '../../../../index/script/api';

import { getUrlQueries } from '../../../../shared/scripts/query';
import { zeroPadding } from '../../../../shared/scripts/zero-padding';
import { nl2br } from '../../../../shared/scripts/nl2br';

// ==========================================
// Type
// ==========================================

type TProps = {
  data: TAllData;
};

// ==========================================
// View
// ==========================================

const Template: FC<TProps> = ({ data }: TProps): ReactElement => {
  const { products } = data;
  const { contents } = products;

  const [filterData, setFilterData] = useState<TProduct>(null);
  const [index, setIndex] = useState<number>(-1);

  // idチェック
  useEffect(() => {
    const query = getUrlQueries();

    if (!query.id) {
      window.location.href = '/';
      return;
    }
    const filter = contents.filter((r: TProduct) => r.id === query.id);

    if (filter.length === 0) {
      window.location.href = '/';
      return;
    }

    setIndex(contents.findIndex((r: TProduct) => r.id === query.id));
    setFilterData(filter[0]);
  }, []);

  const content = () => {
    if (!filterData) {
      return null;
    } else if (!filterData.body) {
      return null;
    } else if (filterData.body.length === 0) {
      return null;
    }

    return filterData.body.map((body: TProductBody, i: number) => {
      return (
        <Contents
          key={i}
          imgURL={body.image.url}
          imagePosition={body.description ? body.imagePosition[0] : 'normal'}
          description={body.description}
        />
      );
    });
  };

  const next = () => {
    const nextIndex = index + 1;

    if (!filterData) {
      return null;
    } else if (nextIndex === contents.length) {
      return null;
    }

    return (
      <div className="detail-nav-contents detail-nav-link-wrap--right">
        <a
          className="js-hover detail-nav-link-wrap"
          href={`/project/detail/?id=${contents[nextIndex].id}`}
        >
          <div className="detail-nav-link-inner">
            <div className="detail-nav-link">
              <span className="sw-line"></span>
            </div>
          </div>
        </a>
      </div>
    );
  };

  const prev = () => {
    const prevIndex = index - 1;

    if (!filterData) {
      return null;
    } else if (index === 0) {
      return null;
    }

    return (
      <div className="detail-nav-contents detail-nav-link-wrap--left">
        <a
          className="js-hover detail-nav-link-wrap"
          href={`/project/detail/?id=${contents[prevIndex].id}`}
        >
          <div className="detail-nav-link-inner">
            <div className="detail-nav-link">
              <span className="sw-line"></span>
            </div>
          </div>
        </a>
      </div>
    );
  };

  const wrap = filterData ? (
    <div className="detail-wrap">
      <div className="detail-inner">
        <div className="detail-kv-wrap">
          <div className="detail-bg-wrap">
            <div className="detail-bg-inner">
              <div
                className="detail-bg"
                style={{ backgroundImage: `url(${filterData.image.url})` }}
              ></div>
            </div>
          </div>
          <div className="detail-kv">
            <div className="js-fade detail-kv-heading">
              <div className="detail-kv-label-wrap">
                <span className="detail-kv-label-number">{`${zeroPadding(
                  String(index + 1)
                )} -`}</span>
                <p className="detail-kv-label">{filterData.type[0]}</p>
              </div>
              <p className="detail-kv-heading-text">{`/ ${filterData.role}`}</p>
            </div>
            <div className="detail-kv-heading-name">
              <h2 className="js-detail-name detail-kv-heading-name-inner">
                {filterData.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="detail-heading-wrap">
          <p className="js-fade detail-heading-text">
            {nl2br(filterData.description)}
          </p>
        </div>
      </div>
      <div className="detail-video-wrap">
        <div className="detail-video-inner">
          <iframe
            className="detail-video"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${filterData.movie}?autoplay=1&amp;origin=http://example.com`}
          />
        </div>
        {filterData.movieText ? (
          <p className="js-fade detail-video-text">
            {nl2br(filterData.movieText)}
          </p>
        ) : null}
      </div>
      <div className="detail-contents-wrap">{content()}</div>
      <div className="js-fade detail-credit-wrap">
        <div className="detail-credit-inner">
          <div className="detail-credit">
            <h3 className="detail-credit-title">Client : </h3>
            <p className="detail-credit-text">{filterData.client}</p>
          </div>
          <div className="detail-credit">
            <h3 className="detail-credit-title">Category : </h3>
            <p className="detail-credit-text">{filterData.category}</p>
          </div>
          <div className="detail-credit">
            <h3 className="detail-credit-title">Product field：</h3>
            <p className="detail-credit-text">{filterData.field}</p>
          </div>
          <div className="detail-credit">
            <h3 className="detail-credit-title">Product field：</h3>
            <p className="detail-credit-text">{filterData.member}</p>
          </div>
        </div>
      </div>
      <div className="detail-nav-wrap">
        <div className="detail-nav-inner">
          {prev()}
          <div className="detail-nav-contents detail-nav-link-wrap--center">
            <a className="js-hover detail-nav-link-text" href="/project/all">
              project list
            </a>
          </div>
          {next()}
        </div>
      </div>
    </div>
  ) : null;

  return <Fragment>{wrap}</Fragment>;
};

export default Template;
