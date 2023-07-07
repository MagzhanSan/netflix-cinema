import { TypeMaterialIconName } from '@/shared/types/icons.types';
import { FC, createElement } from 'react';
import * as MaterialIcons from 'react-icons/md';

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name] || MaterialIcons.MdDragIndicator;
  return createElement(IconComponent);
};

export default MaterialIcon;
