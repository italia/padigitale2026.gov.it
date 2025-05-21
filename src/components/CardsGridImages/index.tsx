"use client";

import {
  CardImageFragmentFragment,
  CardsGridImagesFragmentFragment,
} from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import {
  Col,
  GridList,
  GridRow,
  GridItem,
  ResponsiveImage,
  Row,
  Icon,
  GridItemTextWrapper,
  GridItemText
} from "design-react-kit";

const cn = classNames.bind(styles);

export function CardsGridImages({props, hasSidebar = false}: {
  props: CardsGridImagesFragmentFragment;
  hasSidebar?: boolean;
}) {

  const {
    // __typename,
    id,
    title,
    // titleHtmlTag,
    description,
    alignment,
    captions,
    // layout,
    backgroundColor,
    button,
    imageBlocks
  } = props;


  return (
    <div key={id}
         aria-labelledby={`section${id}`}
         className={cn(
      `${backgroundColor}`,
      {
        "wrapper py-5": !hasSidebar,
        "row pt-3": hasSidebar,
      }
    )}>
      <div className={cn(
        {
          "section-content": !hasSidebar,
          "col-12": hasSidebar,
        }
      )}>
        <div className={cn(
          {
            "container-xxl": !hasSidebar,
          }
        )}>
          <div className={"row"}>
            <div className="col-12 pb-3">
              {title && (
                <h2
                  id={`section${id}`}
                  className={cn(
                    "mb-0 lh-sm",
                    alignment === "center" ? "text-center" : "text-start"
                  )}>
                  {title}
                </h2>
              )}
              {description && (
                <p
                  className={cn(
                    "font-sans-serif mt-3 mb-0",
                    alignment === "center" ? "text-center" : "text-start"
                  )}>
                  {description}
                </p>
              )}
            </div>
          </div>

          {imageBlocks && (
            <Row>
              <Col className={"pt-3"}>
                <GridList>
                  <GridRow>
                    {imageBlocks.map((record, idx) => {
                      const cardFragment:CardImageFragmentFragment = record as CardImageFragmentFragment;
                      return (
                        <Col
                          lg={4}
                          xs={6}
                          key={idx}
                        >
                          <GridItem>
                            {((cardFragment?.href || cardFragment?.cmsPage?.slug) && (
                              <a href={cardFragment?.href || `/${cardFragment?.cmsPage?.slug}`}
                                aria-label={"Questa immagine apre un link"}
                                target={cardFragment?.target || "_self"}>
                                {(captions && captions === 'show') && (
                                  <ResponsiveImage
                                    alt={cardFragment.image?.alt || ''}
                                    src={cardFragment.image?.url16_9 || ''}
                                    title={cardFragment.image?.title || ''}
                                  >
                                    <GridItemTextWrapper
                                      className="figure-caption"
                                      tag="figcaption"
                                    >
                                      <GridItemText>{cardFragment?.didascalia || cardFragment?.image?.title || ''}</GridItemText>
                                      {(cardFragment?.didascalia || cardFragment?.image?.title) && (
                                        <Icon
                                          aria-hidden={true}
                                          icon="it-code-circle"
                                          size="sm"
                                        />
                                      )}
                                    </GridItemTextWrapper>
                                  </ResponsiveImage>
                                ) || (
                                  <ResponsiveImage
                                    alt={cardFragment.image?.alt || ''}
                                    src={cardFragment.image?.url16_9 || ''}
                                    title={cardFragment.image?.title || ''}
                                  />
                                )}
                              </a>
                            )) || ((captions && captions === 'show') && (
                              <ResponsiveImage
                                alt={cardFragment.image?.alt || ''}
                                src={cardFragment.image?.url16_9 || ''}
                                title={cardFragment.image?.title || ''}
                              >
                                <GridItemTextWrapper
                                  className="figure-caption"
                                  tag="figcaption"
                                >
                                  <GridItemText>{cardFragment?.didascalia || cardFragment?.image?.title || ''}</GridItemText>
                                  {(cardFragment?.didascalia || cardFragment?.image?.title) && (
                                    <Icon
                                      aria-hidden={true}
                                      icon="it-code-circle"
                                      size="sm"
                                    />
                                  )}
                                </GridItemTextWrapper>
                              </ResponsiveImage>
                            )) || (
                              <ResponsiveImage
                                alt={cardFragment.image?.alt || ''}
                                src={cardFragment.image?.url16_9 || ''}
                                title={cardFragment.image?.title || ''}
                              />
                            )}
                          </GridItem>
                        </Col>
                      )
                    })}
                  </GridRow>
                </GridList>
              </Col>
            </Row>
          )}


          {button && (
            <div className={"row h-100"}>
              <div
                className={cn(
                  "col-12 pt-5",
                  alignment === "center" ? "text-center" : "text-start"
                )}
              >
                <Link
                  href={button.href || `/${button.cmsPage?.slug || ""}`}
                  className={"btn btn-outline-primary"}
                >
                  <span>{button.text}</span>
                  {button.icon && (
                    <Icon
                      className="my-0"
                      color="primary"
                      icon={button.icon}
                      size="sm"
                      title=""
                      padding
                    />
                  )}
                </Link>
              </div>
            </div>
          )}


        </div>


      </div>
    </div>
  );
}
