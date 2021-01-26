export default function previewGenerator(subset, id) {
  switch (id) {
    case 'dseg-weather':
    case 'dseg14':
    case 'dseg7':
      return '0123456789';

    case 'material-icons':
      return 'photo_camera thumb_up assignment create_new_folder insert_invitation drafts credit_card timer check_box close';

    case 'yakuhanjp':
    case 'yakuhanrp':
      return '、。！？〈〉《》「」『』【】〔〕・（）：；［］｛｝';

    case 'yakuhanjps':
    case 'yakuhanrps':
      return '〈〉《》「」『』【】〔〕（）［］｛｝';

    case 'yakuhanmp':
      return '、。！？《》「」『』【】〔〕・（）：；［］｛｝';
    case 'yakuhanmps':
      return '《》「」『』【】〔〕（）［］｛｝';

    default:
      break;
  }

  switch (subset) {
    case 'latin':
    case 'latin-ext':
    case 'all':
      return 'The quick brown fox jumps over the lazy dog.';

    case 'arabic':
      return '.الحب سماء لا تمطر غير الأحلام';

    case 'greek':
      return 'Ήταν απλώς θέμα χρόνου.';

    case 'khmer':
      return 'ខ្ញុំបានមើលព្យុះ ដែលមានភាពស្រស់ស្អាតណាស់ ប៉ុន្តែគួរឲ្យខ្លាច';

    case 'korean':
      return '그들의 장비와 기구는 모두 살아 있다.';

    default:
      return '';
  }
}
