import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes, ReactNode } from 'react';

export interface NumAccordionHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente NumAccordionHeader */
  className?: string;
  /** Utilizzare questo attributo per indicare se l'elemento è attivo o no */
  active?: boolean;
  /** Questa funzione verrà chiamata quando avviene un click sul componente NumAccordionHeader */
  onToggle?: () => void;
  /** Contenuto aggiuntivo all'interno del bottone dell'NumAccordionHeader */
  append?: ReactNode;
  testId?: string;
}

export const NumAccordionHeader: FC<NumAccordionHeaderProps> = ({
  className,
  tag = 'button',
  active = false,
  append,
  onToggle,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const toggleClasses = classNames(className, 'accordion-button', {
    collapsed: !active
  });
  return (
    <div className='accordion-header' data-testid={testId}>
      <Tag
        aria-expanded={active ? 'true' : 'false'}
        className={toggleClasses}
        onClick={onToggle}
        {...attributes}
        {...(tag === 'button' && { type: 'button' })}
      ></Tag>
      {append}
    </div>
  );
};
