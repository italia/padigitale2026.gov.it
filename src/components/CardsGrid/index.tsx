import {
  CardsGridGenericRecord,
  CardsGridAttachmentRecord,
  CardsGridServiceRecord,
  CardsGridResourceRecord,
  CardsGridNewsRecord,
  CardsGridAnnouncementRecord
} from "@/graphql/generated";

import { CardsGridClient } from "./client";
import { Avviso } from "@/lib/salesforce";
import { getAvvisi } from "@/lib/salesforce";


export async function CardsGrid({
                            props,
                            hasSidebar = false,
                          }: {
  props:
    | CardsGridGenericRecord
    | CardsGridAttachmentRecord
    | CardsGridServiceRecord
    | CardsGridResourceRecord
    | CardsGridNewsRecord
    | CardsGridAnnouncementRecord;
  hasSidebar?: boolean;
}) {
  
  const {__typename} = props;

  let announcements: Avviso[] = [];

  if (__typename === "CardsGridAnnouncementRecord") {
    try {
      announcements = await getAvvisi(Number(props.sectionFields?.columns));
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  }

  return <CardsGridClient props={props} hasSidebar={hasSidebar} fetchedAnnouncements={announcements} />;
  //   <div
  //     key={id}
  //     id={id}
  //     aria-labelledby={`section${id}`}
  //     className={cn(`${backgroundColor}`, {
  //       "wrapper py-5": !hasSidebar,
  //       "row pt-3": hasSidebar,
  //     })}
  //   >
  //     <div
  //       className={cn({
  //         "section-content": !hasSidebar,
  //         "col-12": hasSidebar,
  //       })}
  //     >
  //       <div
  //         className={cn({
  //           "container-xxl": !hasSidebar,
  //         })}
  //       >
  //         <div className={"row"}>
  //           <div className="col-12 pb-3">
  //             {title && (
  //               <h2
  //                 id={`section${id}`}
  //                 className={cn(
  //                   "mb-0 lh-sm",
  //                   alignment === "center" ? "text-center" : "text-start"
  //                 )}
  //               >
  //                 {title}
  //               </h2>
  //             )}
  //             {description && (
  //               <p
  //                 className={cn(
  //                   "font-sans-serif mt-3 mb-0",
  //                   alignment === "center" ? "text-center" : "text-start"
  //                 )}
  //               >
  //                 {description}
  //               </p>
  //             )}
  //           </div>
  //         </div>

  //         {announcements && (() => {
  //           if (columns === 1) {
  //             colClasses = "col-12";
  //           } else if (columns === 2) {
  //             colClasses = "col-12 col-md-6";
  //           } else if (columns === 3) {
  //             colClasses = "col-12 col-lg-4";
  //           } else if (columns === 4) {
  //             colClasses = "col-12 col-lg-3";
  //           }
  //           return (
  //             <div className={"row"}>
  //               {announcements.map((announcement, idx) => {
  //                 return (
  //                   <div
  //                     key={idx}
  //                     className={cn(
  //                       `${colClasses} d-flex flex-column justify-content-stretch`,
  //                       {
  //                         "pt-5": columns && columns === 1,
  //                         "pt-4": (columns && columns >= 2) || !columns,
  //                       }
  //                     )}
  //                   >
  //                     <CardAnnouncement
  //                       layout={
  //                         columns === 1
  //                           ? borderOnTop
  //                             ? CardAnnouncementLayout.large_with_border_top
  //                             : CardAnnouncementLayout.large
  //                           : borderOnTop
  //                             ? CardAnnouncementLayout.small_with_border_top
  //                             : CardAnnouncementLayout.small
  //                       }
  //                       TitleTag={cardTitleTag}
  //                       props={announcement}
  //                     />
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           )
  //         })() || ""}

  //         {resources && (() => {
  //           if (columns === 1) {
  //             colClasses = "col-12";
  //           } else if (columns === 2) {
  //             colClasses = "col-12 col-md-6";
  //           } else if (columns === 3) {
  //             colClasses = "col-12 col-lg-4";
  //           } else if (columns === 4) {
  //             colClasses = "col-12 col-lg-3";
  //           }
  //           return (
  //             <div className={"row"}>
  //               {resources.map((resource, idx) => {
  //                 return (
  //                   <div
  //                     key={idx}
  //                     className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
  //                   >
  //                     <CardResource TitleTag={cardTitleTag} props={resource}/>
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           )
  //         })() || ""}

  //         {news && news.length && (!newsSelection || newsSelection !== "paginated") && (() => {
  //           if (columns === 1) {
  //             colClasses = "col-12";
  //           } else if (columns === 2) {
  //             colClasses = "col-12 col-md-6";
  //           } else if (columns === 3) {
  //             colClasses = "col-12 col-lg-4";
  //           } else if (columns === 4) {
  //             colClasses = "col-12 col-lg-3";
  //           }

  //           return (
  //             <div className={"row h-100"} role={"list"}>
  //               {news.map((record, idx) => {
  //                 return (
  //                   <div
  //                     role={"listitem"}
  //                     key={idx}
  //                     className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
  //                   >
  //                     <CardNews
  //                       TitleTag={cardTitleTag}
  //                       cardLayout={newsCardLayoutEnum.clean}
  //                       props={record}
  //                       parentId={id}
  //                     />
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           )
  //         })() || ""}

  //         {news && news.length && (newsSelection && newsSelection === "paginated") && (() => {
  //           if (columns === 1) {
  //             colClasses = "col-12";
  //           } else if (columns === 2) {
  //             colClasses = "col-12 col-md-6";
  //           } else if (columns === 3) {
  //             colClasses = "col-12 col-lg-4";
  //           } else if (columns === 4) {
  //             colClasses = "col-12 col-lg-3";
  //           }

  //           const itemsPerPage = columns !== 3 ? 14 : 12;

  //           return (
  //             <>
  //               <div
  //                 role="region"
  //                 aria-label="Lista notizie"
  //                 aria-live="polite"
  //               >
  //                 <Row role={"list"} className={"h-100"}>
  //                   {news.map((newsRecord: NewsRecord, idx) => {
  //                     const startIndex = (currentPage - 1) * itemsPerPage;
  //                     const endIndex = currentPage * itemsPerPage;
  //                     const shouldHide = (idx < startIndex || idx >= endIndex);

  //                     if (shouldHide && news.length >= itemsPerPage) return null;

  //                     return (
  //                       <div
  //                         role={"listitem"}
  //                         key={idx}
  //                         className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
  //                       >
  //                         <CardNews
  //                           TitleTag={cardTitleTag}
  //                           cardLayout={newsCardLayoutEnum.clean}
  //                           props={newsRecord}
  //                           parentId={id}
  //                         />
  //                       </div>
  //                     );
  //                   })}
  //                 </Row>
  //               </div>

  //               {news.length > itemsPerPage && (
  //                 <Col
  //                   className={cn("col-12 pt-5", {"d-flex justify-content-center": alignment === "center"})}>
  //                   <Pager aria-label="Naviga tra le pagine di questa lista di notizie"
  //                          role="navigation">
  //                     <PaginationItem disabled={currentPage <= 1}>
  //                       <PaginationLink
  //                         // onClick={(e) => {
  //                         //   e.preventDefault();
  //                         //   const newPage = currentPage - 1;
  //                         //   const url = createPageURL(newPage, news, itemsPerPage);
  //                         //   window.history.replaceState(null, "", url);
  //                         //   setCurrentPage(newPage);
  //                         // }}
  //                         href={createPageURL(currentPage - 1, news, itemsPerPage)}>
  //                         <span className="visually-hidden">Pagina precedente</span>
  //                         <Icon aria-hidden icon="it-chevron-left"/>
  //                       </PaginationLink>
  //                     </PaginationItem>
  //                     {Array.from({length: Math.ceil(news.length / itemsPerPage)}).map((_, pageIndex) => (
  //                       <PaginationItem key={pageIndex}>
  //                         <PaginationLink
  //                           aria-current={currentPage === pageIndex + 1 ? "page" : undefined}
  //                           aria-label={`Vai alla pagina ${pageIndex + 1} di questa lista di notizie`}
  //                           // onClick={(e) => {
  //                           //   e.preventDefault();
  //                           //   const newPage = pageIndex + 1;
  //                           //   const url = createPageURL(newPage, news, itemsPerPage);
  //                           //   window.history.replaceState(null, "", url);
  //                           //   setCurrentPage(newPage);
  //                           // }}
  //                           href={createPageURL(pageIndex + 1, news, itemsPerPage)}>
  //                           {pageIndex + 1}
  //                         </PaginationLink>
  //                       </PaginationItem>
  //                     ))}
  //                     <PaginationItem
  //                       disabled={currentPage >= Math.ceil(news.length / itemsPerPage)}>
  //                       <PaginationLink
  //                         // onClick={(e) => {
  //                         //   e.preventDefault();
  //                         //   const newPage = currentPage + 1;
  //                         //   const url = createPageURL(newPage, news, itemsPerPage);
  //                         //   window.history.replaceState(null, "", url);
  //                         //   setCurrentPage(newPage);
  //                         // }}
  //                         href={createPageURL(currentPage + 1, news, itemsPerPage)}>
  //                         <span className="visually-hidden">Pagina successiva</span>
  //                         <Icon aria-hidden icon="it-chevron-right"/>
  //                       </PaginationLink>
  //                     </PaginationItem>
  //                   </Pager>
  //                 </Col>
  //               )}
  //             </>
  //           )
  //         })() || ""}

  //         {cards !== null && (() => {
  //           if (columns === 1) {
  //             colClasses = "col-12";
  //           } else if (columns === 2) {
  //             colClasses = "col-12 col-md-6";
  //           } else if (columns === 3) {
  //             colClasses = "col-12 col-lg-4";
  //           } else if (columns === 4) {
  //             colClasses = "col-12 col-lg-3";
  //           }

  //           return (
  //             <div className={"row h-100"}>
  //               {cards.map((card, idx) => {
  //                 if (card.__typename === "CardGenericRecord") {
  //                   return (
  //                     <div
  //                       key={idx}
  //                       className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
  //                     >
  //                       <CardGeneric
  //                         TitleTag={cardTitleTag}
  //                         cardLayout={
  //                           genericCardLayoutEnum[
  //                             (cardLayout ??
  //                               "bordered") as keyof typeof genericCardLayoutEnum
  //                             ]
  //                         }
  //                         props={card}
  //                       />
  //                     </div>
  //                   );
  //                 } else if (card.__typename === "CardAttachmentRecord") {
  //                   return (
  //                     <div
  //                       key={idx}
  //                       className={`${colClasses} pt-4 d-flex flex-column justify-content-stretch`}
  //                     >
  //                       <CardAttachment TitleTag={cardTitleTag} props={card}/>
  //                     </div>
  //                   );
  //                 } else if (card.__typename === "CardServiceRecord") {
  //                   return (
  //                     <Fragment key={idx}>
  //                       {(idx === 0 || idx % 3 === 0) && (
  //                         <div className={"col-12"}>
  //                           <div className={"w-100 border-top-lg"}></div>
  //                           {" "}
  //                         </div>
  //                       )}
  //                       <div
  //                         className={cn(
  //                           "col-12 col-lg-4 d-flex flex-column pt-3 justify-content-stretch border-neutral-1-bg-a3",
  //                           {
  //                             "border-end-lg": (idx + 1) % 3 != 0,
  //                           }
  //                         )}
  //                       >
  //                         <CardService
  //                           customClass={"border-bottom border-bottom-lg-0"}
  //                           TitleTag={cardTitleTag}
  //                           props={card}
  //                         />
  //                       </div>
  //                       {cards.length === idx + 1 && (
  //                         <div className={"col-12"}>
  //                           <div className={"w-100 border-top-lg"}></div>
  //                           {" "}
  //                         </div>
  //                       )}
  //                     </Fragment>
  //                   );
  //                 }
  //               })}
  //             </div>
  //           )
  //         })() || ""}

  //         {button && (
  //           <div className={"row h-100"}>
  //             <div
  //               className={cn(
  //                 "col-12 pt-5",
  //                 alignment === "center" ? "text-center" : "text-start"
  //               )}
  //             >
  //               <Link
  //                 href={button.href || `/${button.cmsPage?.slug || ""}`}
  //                 className={"btn btn-outline-primary"}
  //               >
  //                 <span>{button.text}</span>
  //                 {button.icon && (
  //                   <Icon
  //                     className="my-0"
  //                     color="primary"
  //                     icon={button.icon}
  //                     size="sm"
  //                     title=""
  //                     padding
  //                   />
  //                 )}
  //               </Link>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
}
